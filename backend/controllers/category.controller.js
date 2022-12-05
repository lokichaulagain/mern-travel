import Category from "../models/Category.js";
import createError from "../utils/error.js";
import slugify from "slugify";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createCategory = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
      url: slugify(req.body.name, "-"),
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const newService = new Category(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Category !"));
  }
};

const updateCategory = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }
    const updatedService = await Category.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Category !"));
  }
};

const deleteCategory = async (req, res, next) => {
  try {
    const deletedService = await Category.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Category !"));
  }
};

const getCategoryById = async (req, res, next) => {
  try {
    const singleService = await Category.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Category by Id !"));
  }
};

// const getAllCategory = async (req, res, next) => {
//   try {
//     const allService = await Category.find();
//     res.status(200).json(allService);
//   } catch (error) {
//     return next(createError(500, "Server Error while getting all Category !"));
//   }
// };

const getAllCategory = async (req, res, next) => {
  try {
    let allService = [];

    // fetch category from particular url
    if (req.query.url) {
      allService = await Category.findOne({ url: req.query.url });
      // const id = allService.id;
      // console.log(id);
    } else {
      allService = await Category.find();
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Product !"));
  }
};

export { createCategory, updateCategory, deleteCategory, getCategoryById, getAllCategory };
