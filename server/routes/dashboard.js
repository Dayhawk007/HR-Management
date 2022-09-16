import express from "express";

import { getPosts } from "../controllers/dashboard.js";

const router=express.Router();

router.get("/", getPosts);

export default router;