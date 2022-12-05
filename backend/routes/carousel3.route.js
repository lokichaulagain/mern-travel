import { Router } from "express";
import { createCarousel3, deleteCarousel3, getAllCarousel3 } from "../controllers/carousel3.controller.js";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("thumbnail"), createCarousel3);
router.get("/", getAllCarousel3);
router.delete("/:id", deleteCarousel3);

export default router;
