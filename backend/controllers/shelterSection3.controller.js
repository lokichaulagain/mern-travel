import ShelterSection3 from "../models/ShelterSection3.js";
import createError from "../utils/error.js";

const createShelterSection3 = async (req, res, next) => {
  try {
    const newService = new ShelterSection3(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating ShelterSection3 !"));
  }
};

const updateShelterSection3 = async (req, res, next) => {
  try {
    const updatedService = await ShelterSection3.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating ShelterSection3 !"));
  }
};

const deleteShelterSection3 = async (req, res, next) => {
  try {
    const deletedService = await ShelterSection3.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting ShelterSection3 !"));
  }
};

const getShelterSection3ById = async (req, res, next) => {
  try {
    const singleService = await ShelterSection3.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting ShelterSection3 by Id !"));
  }
};

const getAllShelterSection3 = async (req, res, next) => {
  try {
    const allService = await ShelterSection3.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all ShelterSection3 !"));
  }
};

export { createShelterSection3, updateShelterSection3, deleteShelterSection3, getShelterSection3ById, getAllShelterSection3 };
