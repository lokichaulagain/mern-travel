import { Router } from "express";
const router = Router();
import { createPricePackage, deletePricePackage, getAllPricePackage, getPricePackageById, updatePricePackage } from "../controllers/PricePackage.controller.js";

router.post("/", createPricePackage);
router.put("/:id", updatePricePackage);
router.get("/:id", getPricePackageById);
router.get("/", getAllPricePackage);
router.delete("/:id", deletePricePackage);

export default router;
