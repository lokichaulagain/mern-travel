import { Router } from "express";
import { createCarousel4, deleteCarousel4, getAllCarousel4, getCarousel4ById, updateCarousel4 } from "../controllers/carousel4.controller.js";
const router = Router();

router.post("/", createCarousel4);
router.put("/:id", updateCarousel4);
router.get("/:id", getCarousel4ById);
router.get("/", getAllCarousel4);
router.delete("/:id", deleteCarousel4);

export default router;
