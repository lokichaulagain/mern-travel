import FoodSection3 from "../models/FoodSection3.js";
import createError from "../utils/error.js";

const createFoodSection3 = async (req, res, next) => {
  try {
    const newService = new FoodSection3(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating FoodSection3 !"));
  }
};

const updateFoodSection3 = async (req, res, next) => {
  try {
    const updatedService = await FoodSection3.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating FoodSection3 !"));
  }
};

const deleteFoodSection3 = async (req, res, next) => {
  try {
    const deletedService = await FoodSection3.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting FoodSection3 !"));
  }
};

const getFoodSection3ById = async (req, res, next) => {
  try {
    const singleService = await FoodSection3.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting FoodSection3 by Id !"));
  }
};

const getAllFoodSection3 = async (req, res, next) => {
  try {
    const allService = await FoodSection3.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all FoodSection3 !"));
  }
};

export { createFoodSection3, updateFoodSection3, deleteFoodSection3, getFoodSection3ById, getAllFoodSection3 };
