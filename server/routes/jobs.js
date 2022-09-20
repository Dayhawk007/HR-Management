import express from 'express';
import {jobCreator,allJobs} from '../controllers/jobs.js'
const router=express.Router();

router.post("/create", jobCreator);
router.get("/allJobs",allJobs);
export default router;