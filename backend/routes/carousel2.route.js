import { Router } from "express";
import { createCarousel2, deleteCarousel2, getAllCarousel2 } from "../controllers/carousel2.controller.js";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("thumbnail"), createCarousel2);
router.get("/", getAllCarousel2);
router.delete("/:id", deleteCarousel2);

export default router;
