import { Router } from "express";
const router = Router();
import { createEvent, deleteEvent, getAllEvent, getEventById, updateEvent } from "../controllers/event.controller.js";

router.post("/", createEvent);
router.put("/:id", updateEvent);
router.get("/:id", getEventById);
router.get("/", getAllEvent);
router.delete("/:id", deleteEvent);

export default router;
