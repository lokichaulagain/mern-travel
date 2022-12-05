import { Router } from "express";
const router = Router();
import { createService, deleteService, getAllService, getServiceById, updateService } from "../controllers/service.controller.js";

router.post("/", createService);
router.put("/:id", updateService);
router.get("/:id", getServiceById);
router.get("/", getAllService);
router.delete("/:id", deleteService);

export default router;
