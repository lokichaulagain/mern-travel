import Blog from "../models/Blog.js";
import createError from "../utils/error.js";
import slugify from "slugify";
import { uploadTocloudinary } from "../utils/uploadFile.js";

const createBlog = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
      url: slugify(req.body.title, "-"),
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const newService = new Blog(data);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Blog !"));
  }
};

const updateBlog = async (req, res, next) => {
  try {
    let data = {
      ...req.body,
    };
    if (req.file) {
      data.image = req.file.path;
      uploadTocloudinary(req.file.path);
    }

    const updatedService = await Blog.findByIdAndUpdate(req.params.id, data, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Blog !"));
  }
};

const deleteBlog = async (req, res, next) => {
  try {
    const deletedService = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Blog !"));
  }
};

const getBlogById = async (req, res, next) => {
  try {
    const singleService = await Blog.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Blog by Id !"));
  }
};

const getAllBlog = async (req, res, next) => {
  try {
    let allService = [];
    if (req.query.slug) {
      allService = await Blog.find({ url: req.query.slug });
    } else if (req.query.category) {
      allService = await Blog.find({ category: req.query.category });
    } else {
      const allService = await Blog.find();
      res.status(200).json(allService);
    }
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Blog !"));
  }
};

export { createBlog, updateBlog, deleteBlog, getBlogById, getAllBlog };
