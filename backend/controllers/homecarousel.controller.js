import HomeCarousel from "../models/HomeCarousel.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createHomeCarousel = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new HomeCarousel(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeCarousel !"));
  }
};

const updateHomeCarousel = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await HomeCarousel.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeCarousel !"));
  }
};

const deleteHomeCarousel = async (req, res, next) => {
  try {
    const deletedService = await HomeCarousel.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeCarousel !"));
  }
};

const getHomeCarouselById = async (req, res, next) => {
  try {
    const singleService = await HomeCarousel.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeCarousel by Id !"));
  }
};

const getAllHomeCarousel = async (req, res, next) => {
  try {
    const allService = await HomeCarousel.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeCarousel !"));
  }
};

export { createHomeCarousel, updateHomeCarousel, deleteHomeCarousel, getHomeCarouselById, getAllHomeCarousel };
