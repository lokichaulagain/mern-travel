import HomeSection3ii from "../models/HomeSection3ii.js";
import createError from "../utils/error.js";

const createHomeSection3ii = async (req, res, next) => {
  try {
    const newService = new HomeSection3ii(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection3ii !"));
  }
};

const updateHomeSection3ii = async (req, res, next) => {
  try {
    const updatedService = await HomeSection3ii.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection3ii !"));
  }
};

const deleteHomeSection3ii = async (req, res, next) => {
  try {
    const deletedService = await HomeSection3ii.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection3ii !"));
  }
};

const getHomeSection3iiById = async (req, res, next) => {
  try {
    const singleService = await HomeSection3ii.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection3ii by Id !"));
  }
};

const getAllHomeSection3ii = async (req, res, next) => {
  try {
    const allService = await HomeSection3ii.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection3ii !"));
  }
};

export { createHomeSection3ii, updateHomeSection3ii, deleteHomeSection3ii, getHomeSection3iiById, getAllHomeSection3ii };
