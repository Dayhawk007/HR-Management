import express from 'express';
import {jobCreator,allJobs,individualJob} from '../controllers/jobs.js'
import {createApplication, getAllApplicationsById, getAllJobDetails} from '../controllers/applications.js'
const router=express.Router();

router.post("/create", jobCreator);
router.get("/allJobs",allJobs);
router.get("/allJobs/:id",individualJob)
router.post("/allJobs/:id/createApplication",createApplication);
router.get("/allJobs/:id/getApplicationsById",getAllApplicationsById);
router.get("/getAllJobDetails",getAllJobDetails);
export default router;