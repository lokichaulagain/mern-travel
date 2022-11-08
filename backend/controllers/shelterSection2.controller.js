import ShelterSection2 from "../models/ShelterSection2.js";
import createError from "../utils/error.js";

const createShelterSection2 = async (req, res, next) => {
  try {
    const newService = new ShelterSection2(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating ShelterSection2 !"));
  }
};

const updateShelterSection2 = async (req, res, next) => {
  try {
    const updatedService = await ShelterSection2.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating ShelterSection2 !"));
  }
};

const deleteShelterSection2 = async (req, res, next) => {
  try {
    const deletedService = await ShelterSection2.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting ShelterSection2 !"));
  }
};

const getShelterSection2ById = async (req, res, next) => {
  try {
    const singleService = await ShelterSection2.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting ShelterSection2 by Id !"));
  }
};

const getAllShelterSection2 = async (req, res, next) => {
  try {
    const allService = await ShelterSection2.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all ShelterSection2 !"));
  }
};

export { createShelterSection2, updateShelterSection2, deleteShelterSection2, getShelterSection2ById, getAllShelterSection2 };
