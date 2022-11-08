import HomeSection2ii from "../models/HomeSection2ii.js";
import createError from "../utils/error.js";

const createHomeSection2ii = async (req, res, next) => {
  try {
    const newService = new HomeSection2ii(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection2ii !"));
  }
};

const updateHomeSection2ii = async (req, res, next) => {
  try {
    const updatedService = await HomeSection2ii.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection2ii !"));
  }
};

const deleteHomeSection2ii = async (req, res, next) => {
  try {
    const deletedService = await HomeSection2ii.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection2ii !"));
  }
};

const getHomeSection2iiById = async (req, res, next) => {
  try {
    const singleService = await HomeSection2ii.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection2ii by Id !"));
  }
};

const getAllHomeSection2ii = async (req, res, next) => {
  try {
    const allService = await HomeSection2ii.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection2ii !"));
  }
};

export { createHomeSection2ii, updateHomeSection2ii, deleteHomeSection2ii, getHomeSection2iiById, getAllHomeSection2ii };
