import Cms from "../models/Cms.js";
import createError from "../utils/error.js";


const createCmsContent = async (req, res, next) => {
  try {
    const newCmsContent = new Cms(req.body);
    const savedCmsContent = await newCmsContent.save();
    res.status(200).json(savedCmsContent);

    




  } catch (error) {
    return next(createError(500, "Server Error while creating Cms content !!!"));
  }
};

const updateCmsContent = async (req, res, next) => {
  try {
    const updatedCmsContent = await Cms.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedCmsContent);
  } catch (error) {
    return next(createError(500, "Server Error while updating Cms content !!!"));
  }
};

const deleteCmsContent = async (req, res, next) => {
  try {
    const deletedCmsContent = await Cms.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedCmsContent);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Cms content !!!"));
  }
};

const getCmsContentById = async (req, res, next) => {
  try {
    const CmsContent = await Cms.findById(req.params.id);
    res.status(200).json(CmsContent);
  } catch (error) {
    return next(createError(500, "Server Error while getting CmsContent by Id !!!"));
  }
};

const getAllCmsContent = async (req, res, next) => {
  try {
    const allCmsContent = await Cms.find();
    res.status(200).json(allCmsContent);
  } catch (error) {
    return next(createError(500, "Server Error while getting all CmsContent !!!"));
  }
};

export { createCmsContent, updateCmsContent, deleteCmsContent, getCmsContentById, getAllCmsContent };
