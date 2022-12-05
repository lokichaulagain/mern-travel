import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createReview, deleteReview, getAllReview, getReviewById, updateReview } from "../controllers/review.controller.js";

router.post("/",uploadFile("thumbnail"), createReview);
router.put("/:id",uploadFile("thumbnail"), updateReview);
router.get("/:id", getReviewById);
router.get("/", getAllReview);
router.delete("/:id", deleteReview);

export default router;
