import Event from "../models/Event.js";
import createError from "../utils/error.js";

const createEvent = async (req, res, next) => {
  try {
    const newService = new Event(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating Event !"));
  }
};

const updateEvent = async (req, res, next) => {
  try {
    const updatedService = await Event.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating Event !"));
  }
};

const deleteEvent = async (req, res, next) => {
  try {
    const deletedService = await Event.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting Event !"));
  }
};

const getEventById = async (req, res, next) => {
  try {
    const singleService = await Event.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting Event by Id !"));
  }
};

const getAllEvent = async (req, res, next) => {
  try {
    const allService = await Event.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all Event !"));
  }
};

export { createEvent, updateEvent, deleteEvent, getEventById, getAllEvent };
