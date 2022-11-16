import { Router } from "express";
const router = Router();
import { createBlog, deleteBlog, getAllBlog, getBlogById, updateBlog } from "../controllers/blog.controller.js";

router.post("/", createBlog);
router.put("/:id", updateBlog);
router.get("/:id", getBlogById);
router.get("/", getAllBlog);
router.delete("/:id", deleteBlog);

export default router;
