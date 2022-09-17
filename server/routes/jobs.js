import express from 'express';
import {jobController} from '../controllers/jobs.js';
const router=express.Router();

router.get("/", jobController);

export default router;