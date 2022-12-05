import Carousel1 from "../models/Carousel1.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createCarousel1 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Carousel1(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Carousel1 !"));
  }
};

const updateCarousel1 = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Carousel1.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Carousel1 !"));
  }
};

const deleteCarousel1 = async (req, res, next) => {
  try {
    const deletedService = await Carousel1.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Carousel1 !"));
  }
};

const getCarousel1ById = async (req, res, next) => {
  try {
    const singleService = await Carousel1.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Carousel1 by Id !"));
  }
};

const getAllCarousel1 = async (req, res, next) => {
  try {
    const allService = await Carousel1.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Carousel1 !"));
  }
};

export { createCarousel1, updateCarousel1, deleteCarousel1, getCarousel1ById, getAllCarousel1 };
