import Vacancy from "../models/Vacancy.js";
import createError from "../utils/error.js";
import { uploadTocloudinary } from "../utils/uploadFile.js";
import slugify from "slugify";

const createVacancy = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
      url: slugify(req.body.position, "-"),
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const newService = new Vacancy(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Vacancy !"));
  }
};

const updateVacancy = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Vacancy.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Vacancy !"));
  }
};

const deleteVacancy = async (req, res, next) => {
  try {
    const deletedService = await Vacancy.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Vacancy !"));
  }
};

const getVacancyById = async (req, res, next) => {
  try {
    const singleService = await Vacancy.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Vacancy by Id !"));
  }
};

const getAllVacancy = async (req, res, next) => {
  try {
    let allService = [];

    if (req.query.slug) {
      allService = await Vacancy.find({ url: req.query.slug });
    } else {
      const allService = await Vacancy.find();
      res.status(200).json(allService);
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Vacancy !"));
  }
};

export { createVacancy, updateVacancy, deleteVacancy, getVacancyById, getAllVacancy };
