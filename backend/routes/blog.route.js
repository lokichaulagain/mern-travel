import { Router } from "express";
const router = Router();
import { uploadFile } from "../utils/uploadFile.js";
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";

router.post("/", uploadFile("thumbnail"), createBlog);
router.put("/:id",uploadFile("thumbnail"), updateBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlog);
router.delete("/:id", deleteBlog);

export default router;
