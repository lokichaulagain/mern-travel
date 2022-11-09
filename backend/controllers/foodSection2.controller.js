import FoodSection2 from "../models/FoodSection2.js";
import createError from "../utils/error.js";

const createFoodSection2 = async (req, res, next) => {
  try {
    const newService = new FoodSection2(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating FoodSection2 !"));
  }
};

const updateFoodSection2 = async (req, res, next) => {
  try {
    const updatedService = await FoodSection2.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating FoodSection2 !"));
  }
};

const deleteFoodSection2 = async (req, res, next) => {
  try {
    const deletedService = await FoodSection2.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting FoodSection2 !"));
  }
};

const getFoodSection2ById = async (req, res, next) => {
  try {
    const singleService = await FoodSection2.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting FoodSection2 by Id !"));
  }
};

const getAllFoodSection2 = async (req, res, next) => {
  try {
    const allService = await FoodSection2.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all FoodSection2 !"));
  }
};

export { createFoodSection2, updateFoodSection2, deleteFoodSection2, getFoodSection2ById, getAllFoodSection2 };
