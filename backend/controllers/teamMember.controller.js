import TeamMember from "../models/TeamMember.js";
import createError from "../utils/error.js";

const createTeamMember = async (req, res, next) => {
  try {
    const newService = new TeamMember(req.body);
    const savedService = await newService.save();
    res.status(200).json(savedService);
  } catch (error) {
    return next(createError(500, "Server Error while creating TeamMember !"));
  }
};

const updateTeamMember = async (req, res, next) => {
  try {
    const updatedService = await TeamMember.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).json(updatedService);
  } catch (error) {
    return next(createError(500, "Server Error while updating TeamMember !"));
  }
};

const deleteTeamMember = async (req, res, next) => {
  try {
    const deletedService = await TeamMember.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedService);
  } catch (error) {
    return next(createError(500, "Server Error while deleting TeamMember !"));
  }
};

const getTeamMemberById = async (req, res, next) => {
  try {
    const singleService = await TeamMember.findById(req.params.id);
    res.status(200).json(singleService);
  } catch (error) {
    return next(createError(500, "Server Error while getting TeamMember by Id !"));
  }
};

const getAllTeamMember = async (req, res, next) => {
  try {
    const allService = await TeamMember.find();
    res.status(200).json(allService);
  } catch (error) {
    return next(createError(500, "Server Error while getting all TeamMember !"));
  }
};

export { createTeamMember, updateTeamMember, deleteTeamMember, getTeamMemberById, getAllTeamMember };
