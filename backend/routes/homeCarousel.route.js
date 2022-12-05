import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createHomeCarousel, deleteHomeCarousel, getAllHomeCarousel } from "../controllers/homeCarousel.controller.js";

router.post("/", uploadFile("thumbnail"), createHomeCarousel);
router.get("/", getAllHomeCarousel);
router.delete("/:id", deleteHomeCarousel);

export default router;
