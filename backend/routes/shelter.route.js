import { Router } from "express";
const router = Router();
import { createShelterSection2, deleteShelterSection2, getAllShelterSection2, getShelterSection2ById, updateShelterSection2 } from "../controllers/shelterSection2.controller.js";
import { createShelterSection3, deleteShelterSection3, getAllShelterSection3, getShelterSection3ById, updateShelterSection3 } from "../controllers/shelterSection3.controller.js";

router.post("/sec2/", createShelterSection2);
router.put("/sec2/:id", updateShelterSection2);
router.get("/sec2/:id", getShelterSection2ById);
router.get("/sec2/", getAllShelterSection2);
router.delete("/sec2/:id", deleteShelterSection2);

router.post("/sec3/", createShelterSection3);
router.put("/sec3/:id", updateShelterSection3);
router.get("/sec3/:id", getShelterSection3ById);
router.get("/sec3/", getAllShelterSection3);
router.delete("/sec3/:id", deleteShelterSection3);

export default router;
