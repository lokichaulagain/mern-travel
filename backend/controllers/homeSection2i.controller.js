import HomeSection2i from "../models/HomeSection2i.js";
import createError from "../utils/error.js";

const createHomeSection2i = async (req, res, next) => {
  try {
    const newService = new HomeSection2i(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection2i !"));
  }
};

const updateHomeSection2i = async (req, res, next) => {
  try {
    const updatedService = await HomeSection2i.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection2i !"));
  }
};

const deleteHomeSection2i = async (req, res, next) => {
  try {
    const deletedService = await HomeSection2i.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection2i !"));
  }
};

const getHomeSection2iById = async (req, res, next) => {
  try {
    const singleService = await HomeSection2i.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection2i by Id !"));
  }
};

const getAllHomeSection2i = async (req, res, next) => {
  try {
    const allService = await HomeSection2i.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection2i !"));
  }
};

export { createHomeSection2i, updateHomeSection2i, deleteHomeSection2i, getHomeSection2iById, getAllHomeSection2i };
