import { Router } from "express";
const router = Router();
import { createTeamMember, deleteTeamMember, getAllTeamMember, getTeamMemberById, updateTeamMember } from "../controllers/teamMember.controller.js";

router.post("/", createTeamMember);
router.put("/:id", updateTeamMember);
router.get("/:id", getTeamMemberById);
router.get("/", getAllTeamMember);
router.delete("/:id", deleteTeamMember);

export default router;
