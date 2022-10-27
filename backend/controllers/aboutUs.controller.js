import AboutUs from "../models/AboutUs.js";
import createError from "../utils/error.js";

const createAboutUSContent = async (req, res, next) => {
  try {
    const newAboutUsContent = new AboutUs(req.body);
    const savedAboutUsContent = await newAboutUsContent.save();
    res.status(200).json(savedAboutUsContent);
  } catch (error) {
    return next(createError(500, "Server Error while creating aboutUs content !!!"));
  }
};

const updateAboutUSContent = async (req, res, next) => {
  try {
    const updatedAboutUSContent = await AboutUs.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedAboutUSContent);
  } catch (error) {
    return next(createError(500, "Server Error while updating aboutUs content !!!"));
  }
};

const deleteAboutUSContent = async (req, res, next) => {
  try {
    const deletedAboutUSContent = await AboutUs.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAboutUSContent);
  } catch (error) {
    return next(createError(500, "Server Error while deleting aboutUs content !!!"));
  }
};

const getAboutUSContentById = async (req, res, next) => {
  try {
    const aboutUsContent = await AboutUs.findById(req.params.id);
    res.status(200).json(aboutUsContent);
  } catch (error) {
    return next(createError(500, "Server Error while getting aboutUsContent by Id !!!"));
  }
};

const getAllAboutUsContent = async (req, res, next) => {
  try {
    const allAboutUsContent = await AboutUs.find();
    res.status(200).json(allAboutUsContent);
  } catch (error) {
    return next(createError(500, "Server Error while getting all aboutUsContent !!!"));
  }
};

export { createAboutUSContent, updateAboutUSContent, deleteAboutUSContent, getAboutUSContentById, getAllAboutUsContent };
