import { Router } from "express";
const router = Router();
import { createContact, updateContact, deleteContact, getContactById, getAllContact } from "../controllers/contact.controller.js";

router.post("/", createContact);
router.put("/:id", updateContact);
router.get("/:id", getContactById);
router.get("/", getAllContact);
router.delete("/:id", deleteContact);

export default router;
