import express from 'express';
import {jobCreator,allJobs,individualJob} from '../controllers/jobs.js'
import {createApplication} from '../controllers/applications.js'
const router=express.Router();

router.post("/create", jobCreator);
router.get("/allJobs",allJobs);
router.get("/allJobs/:id",individualJob)
router.get("/allJobs/:id/createApplication",createApplication);
export default router;