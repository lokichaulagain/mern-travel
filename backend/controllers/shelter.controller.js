import Shelter from "../models/Shelter.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createShelter = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Shelter(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Shelter !"));
  }
};

const updateShelter = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Shelter.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Shelter !"));
  }
};

const deleteShelter = async (req, res, next) => {
  try {
    const deletedService = await Shelter.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Shelter !"));
  }
};

const getShelterById = async (req, res, next) => {
  try {
    const singleService = await Shelter.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Shelter by Id !"));
  }
};

const getAllShelter = async (req, res, next) => {
  try {
    const allService = await Shelter.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Shelter !"));
  }
};

export { createShelter, updateShelter, deleteShelter, getShelterById, getAllShelter };
