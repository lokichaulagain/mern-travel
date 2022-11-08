import HomeSection3i from "../models/HomeSection3i.js";
import createError from "../utils/error.js";

const createHomeSection3i = async (req, res, next) => {
  try {
    const newService = new HomeSection3i(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection3i !"));
  }
};

const updateHomeSection3i = async (req, res, next) => {
  try {
    const updatedService = await HomeSection3i.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection3i !"));
  }
};

const deleteHomeSection3i = async (req, res, next) => {
  try {
    const deletedService = await HomeSection3i.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection3i !"));
  }
};

const getHomeSection3iById = async (req, res, next) => {
  try {
    const singleService = await HomeSection3i.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection3i by Id !"));
  }
};

const getAllHomeSection3i = async (req, res, next) => {
  try {
    const allService = await HomeSection3i.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection3i !"));
  }
};

export { createHomeSection3i, updateHomeSection3i, deleteHomeSection3i, getHomeSection3iById, getAllHomeSection3i };
