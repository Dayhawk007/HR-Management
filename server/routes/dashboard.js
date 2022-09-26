import express from "express";

import { getPosts } from "../controllers/dashboard.js";
import { jobSummary } from "../controllers/jobs.js";

const router=express.Router();

router.get("/", getPosts);
router.get("/jobsSummary",jobSummary);

export default router;