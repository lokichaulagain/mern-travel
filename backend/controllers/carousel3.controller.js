import Carousel3 from "../models/Carousel3.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createCarousel3 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Carousel3(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Carousel3 !"));
  }
};

const updateCarousel3 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Carousel3.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Carousel3 !"));
  }
};

const deleteCarousel3 = async (req, res, next) => {
  try {
    const deletedService = await Carousel3.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Carousel3 !"));
  }
};

const getCarousel3ById = async (req, res, next) => {
  try {
    const singleService = await Carousel3.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Carousel3 by Id !"));
  }
};

const getAllCarousel3 = async (req, res, next) => {
  try {
    const allService = await Carousel3.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Carousel3 !"));
  }
};

export { createCarousel3, updateCarousel3, deleteCarousel3, getCarousel3ById, getAllCarousel3 };
