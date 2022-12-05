import Carousel4 from "../models/Carousel4.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createCarousel4 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Carousel4(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Carousel4 !"));
  }
};

const updateCarousel4 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Carousel4.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Carousel4 !"));
  }
};

const deleteCarousel4 = async (req, res, next) => {
  try {
    const deletedService = await Carousel4.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Carousel4 !"));
  }
};

const getCarousel4ById = async (req, res, next) => {
  try {
    const singleService = await Carousel4.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Carousel4 by Id !"));
  }
};

const getAllCarousel4 = async (req, res, next) => {
  try {
    const allService = await Carousel4.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Carousel4 !"));
  }
};

export { createCarousel4, updateCarousel4, deleteCarousel4, getCarousel4ById, getAllCarousel4 };
