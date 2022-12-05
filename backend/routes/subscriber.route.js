import { Router } from "express";
const router = Router();
import { createSubscriber, deleteSubscriber, getAllSubscriber } from "../controllers/subscriber.controller.js";
router.post("/", createSubscriber);
router.get("/", getAllSubscriber);
router.delete("/:id", deleteSubscriber);

export default router;
