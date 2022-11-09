import { Router } from "express";
const router = Router();
import { createFoodSection2, deleteFoodSection2, getAllFoodSection2, getFoodSection2ById, updateFoodSection2 } from "../controllers/foodSection2.controller.js";
import { createFoodSection3, deleteFoodSection3, getAllFoodSection3, getFoodSection3ById, updateFoodSection3 } from "../controllers/foodSection3.controller.js";

router.post("/sec2/", createFoodSection2);
router.put("/sec2/:id", updateFoodSection2);
router.get("/sec2/:id", getFoodSection2ById);
router.get("/sec2/", getAllFoodSection2);
router.delete("/sec2/:id", deleteFoodSection2);

router.post("/sec3/", createFoodSection3);
router.put("/sec3/:id", updateFoodSection3);
router.get("/sec3/:id", getFoodSection3ById);
router.get("/sec3/", getAllFoodSection3);
router.delete("/sec3/:id", deleteFoodSection3);

export default router;
