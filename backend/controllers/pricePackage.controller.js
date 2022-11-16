import PricePackage from "../models/PricePackage.js";
import createError from "../utils/error.js";

const createPricePackage = async (req, res, next) => {
  try {
    const newService = new PricePackage(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating PricePackage !"));
  }
};

const updatePricePackage = async (req, res, next) => {
  try {
    const updatedService = await PricePackage.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating PricePackage !"));
  }
};

const deletePricePackage = async (req, res, next) => {
  try {
    const deletedService = await PricePackage.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting PricePackage !"));
  }
};

const getPricePackageById = async (req, res, next) => {
  try {
    const singleService = await PricePackage.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting PricePackage by Id !"));
  }
};

const getAllPricePackage = async (req, res, next) => {
  try {
    const allService = await PricePackage.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all PricePackage !"));
  }
};

export { createPricePackage, updatePricePackage, deletePricePackage, getPricePackageById, getAllPricePackage };
