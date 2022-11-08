import HomeSection4 from "../models/HomeSection4.js";
import createError from "../utils/error.js";

const createHomeSection4 = async (req, res, next) => {
  try {
    const newService = new HomeSection4(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection4 !"));
  }
};

const updateHomeSection4 = async (req, res, next) => {
  try {
    const updatedService = await HomeSection4.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection4 !"));
  }
};

const deleteHomeSection4 = async (req, res, next) => {
  try {
    const deletedService = await HomeSection4.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection4 !"));
  }
};

const getHomeSection4ById = async (req, res, next) => {
  try {
    const singleService = await HomeSection4.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection4 by Id !"));
  }
};

const getAllHomeSection4 = async (req, res, next) => {
  try {
    const allService = await HomeSection4.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection4 !"));
  }
};

export { createHomeSection4, updateHomeSection4, deleteHomeSection4, getHomeSection4ById, getAllHomeSection4 };
