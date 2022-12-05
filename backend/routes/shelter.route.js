import { Router } from "express";
import { createShelter, deleteShelter, getAllShelter } from "../controllers/shelter.controller.js";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";

router.post("/", uploadFile("thumbnail"), createShelter);
router.get("/", getAllShelter);
router.delete("/:id", deleteShelter);

export default router;
