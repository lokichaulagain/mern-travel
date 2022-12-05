import { Router } from "express";
import { createCarousel1, deleteCarousel1, getAllCarousel1 } from "../controllers/carousel1.controller.js";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("thumbnail"), createCarousel1);
router.get("/", getAllCarousel1);
router.delete("/:id", deleteCarousel1);

export default router;
