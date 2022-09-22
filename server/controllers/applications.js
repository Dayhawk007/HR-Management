import Job from '../models/jobs.js';
import Applications from "../models/application.js"


export const createApplication= async(req,res) =>{
    try {
        const job_id=req.params.id;
        const { name,
            email,
            candidateStatus,
        }=req.body;
        const application=await new Applications({
            name,
            email,
            candidateStatus,
            job:job_id
        });
        await application.save();
        const job_by_id=await Job.findById(job_id);
        job_by_id.applications.push(application);
        job_by_id.update({numberOfCandidates:job_by_id.numberOfCandidates++});
        await job_by_id.save();
        res.status(200).json(application);    
    } catch (error) {
        res.status(500).json(
            {"error":error}
        )
    }
}







