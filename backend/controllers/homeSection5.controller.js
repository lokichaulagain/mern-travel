import HomeSection5 from "../models/HomeSection5.js";
import createError from "../utils/error.js";

const createHomeSection5 = async (req, res, next) => {
  try {
    const newService = new HomeSection5(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating HomeSection5 !"));
  }
};

const updateHomeSection5 = async (req, res, next) => {
  try {
    const updatedService = await HomeSection5.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating HomeSection5 !"));
  }
};

const deleteHomeSection5 = async (req, res, next) => {
  try {
    const deletedService = await HomeSection5.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting HomeSection5 !"));
  }
};

const getHomeSection5ById = async (req, res, next) => {
  try {
    const singleService = await HomeSection5.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting HomeSection5 by Id !"));
  }
};

const getAllHomeSection5 = async (req, res, next) => {
  try {
    const allService = await HomeSection5.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all HomeSection5 !"));
  }
};

export { createHomeSection5, updateHomeSection5, deleteHomeSection5, getHomeSection5ById, getAllHomeSection5 };
