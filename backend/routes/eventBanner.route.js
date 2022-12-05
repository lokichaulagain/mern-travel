import { Router } from "express";
const router = Router();
import {uploadFile} from '../utils/uploadFile.js'
import { createEventBanner, deleteEventBanner, getAllEventBanner, getEventBannerById, updateEventBanner } from "../controllers/eventBanner.controller.js";

router.post("/", uploadFile("thumbnail"), createEventBanner);
router.put("/:id",uploadFile("thumbnail"), updateEventBanner);
router.get("/:id", getEventBannerById);
router.get("/", getAllEventBanner);
router.delete("/:id", deleteEventBanner);

export default router;
