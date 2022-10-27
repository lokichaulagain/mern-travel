import { Router } from "express";
const router = Router();
import { createAboutUSContent, deleteAboutUSContent, getAboutUSContentById, getAllAboutUsContent, updateAboutUSContent } from "../controllers/aboutUs.controller.js";

router.post("/", createAboutUSContent);
router.put("/:id", updateAboutUSContent);
router.get("/:id", getAboutUSContentById);
router.get("/", getAllAboutUsContent);
router.delete("/:id", deleteAboutUSContent);

export default router;
