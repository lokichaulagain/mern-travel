import { Router } from "express";
const router = Router();
import { createHomeSection2i, deleteHomeSection2i, getAllHomeSection2i, getHomeSection2iById, updateHomeSection2i } from "../controllers/homeSection2i.controller.js";
import { createHomeSection2ii, deleteHomeSection2ii, getAllHomeSection2ii, getHomeSection2iiById, updateHomeSection2ii } from "../controllers/homeSection2ii.controller.js";
import { createHomeSection3i, deleteHomeSection3i, getAllHomeSection3i, getHomeSection3iById, updateHomeSection3i } from "../controllers/homeSection3i.controller.js";
import { createHomeSection3ii, deleteHomeSection3ii, getAllHomeSection3ii, getHomeSection3iiById, updateHomeSection3ii } from "../controllers/homeSection3ii.controller.js";
import { createHomeSection4, deleteHomeSection4, getAllHomeSection4, getHomeSection4ById, updateHomeSection4 } from "../controllers/homeSection4.controller.js";
import { createHomeSection5, deleteHomeSection5, getAllHomeSection5, getHomeSection5ById, updateHomeSection5 } from "../controllers/homeSection5.controller.js";

router.post("/sec5/", createHomeSection5);
router.put("/sec5/:id", updateHomeSection5);
router.get("/sec5/:id", getHomeSection5ById);
router.get("/sec5/", getAllHomeSection5);
router.delete("/sec5/:id", deleteHomeSection5);

router.post("/sec4/", createHomeSection4);
router.put("/sec4/:id", updateHomeSection4);
router.get("/sec4/:id", getHomeSection4ById);
router.get("/sec4/", getAllHomeSection4);
router.delete("/sec4/:id", deleteHomeSection4);

router.post("/sec3i/", createHomeSection3i);
router.put("/sec3i/:id", updateHomeSection3i);
router.get("/sec3i/:id", getHomeSection3iById);
router.get("/sec3i/", getAllHomeSection3i);
router.delete("/sec3i/:id", deleteHomeSection3i);

router.post("/sec3ii/", createHomeSection3ii);
router.put("/sec3ii/:id", updateHomeSection3ii);
router.get("/sec3ii/:id", getHomeSection3iiById);
router.get("/sec3ii/", getAllHomeSection3ii);
router.delete("/sec3ii/:id", deleteHomeSection3ii);

router.post("/sec2i/", createHomeSection2i);
router.put("/sec2i/:id", updateHomeSection2i);
router.get("/sec2i/:id", getHomeSection2iById);
router.get("/sec2i/", getAllHomeSection2i);
router.delete("/sec2i/:id", deleteHomeSection2i);

router.post("/sec2ii/", createHomeSection2ii);
router.put("/sec2ii/:id", updateHomeSection2ii);
router.get("/sec2ii/:id", getHomeSection2iiById);
router.get("/sec2ii/", getAllHomeSection2ii);
router.delete("/sec2ii/:id", deleteHomeSection2ii);

export default router;
