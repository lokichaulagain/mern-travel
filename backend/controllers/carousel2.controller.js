import Carousel2 from "../models/Carousel2.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createCarousel2 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Carousel2(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Carousel2 !"));
  }
};

const updateCarousel2 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Carousel2.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Carousel2 !"));
  }
};

const deleteCarousel2 = async (req, res, next) => {
  try {
    const deletedService = await Carousel2.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Carousel2 !"));
  }
};

const getCarousel2ById = async (req, res, next) => {
  try {
    const singleService = await Carousel2.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Carousel2 by Id !"));
  }
};

const getAllCarousel2 = async (req, res, next) => {
  try {
    const allService = await Carousel2.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Carousel2 !"));
  }
};

export { createCarousel2, updateCarousel2, deleteCarousel2, getCarousel2ById, getAllCarousel2 };
