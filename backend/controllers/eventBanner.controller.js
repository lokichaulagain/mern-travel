import EventBanner from "../models/EventBanner.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createEventBanner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new EventBanner(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating EventBanner !"));
  }
};

const updateEventBanner = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const updatedService = await EventBanner.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating EventBanner !"));
  }
};

const deleteEventBanner = async (req, res, next) => {
  try {
    const deletedService = await EventBanner.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting EventBanner !"));
  }
};

const getEventBannerById = async (req, res, next) => {
  try {
    const singleService = await EventBanner.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting EventBanner by Id !"));
  }
};

const getAllEventBanner = async (req, res, next) => {
  try {
    const allService = await EventBanner.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all EventBanner !"));
  }
};

export { createEventBanner, updateEventBanner, deleteEventBanner, getEventBannerById, getAllEventBanner };
