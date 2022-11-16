import Blog from "../models/Blog.js";
import createError from "../utils/error.js";

const createBlog = async (req, res, next) => {
  try {
    const newService = new Blog(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Blog !"));
  }
};

const updateBlog = async (req, res, next) => {
  try {
    const updatedService = await Blog.findByIdAndUpdate(req.params.id, req.body, {
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
    const allService = await Blog.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Blog !"));
  }
};

export { createBlog, updateBlog, deleteBlog, getBlogById, getAllBlog };
