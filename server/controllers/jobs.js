import Job from "../models/jobs.js";

export const jobCreator= async (req,res) =>{
    try {
            const{
                title,
                designation,
                typeOfJob,
                companyName,
                description,
                salary,
            }=req.body;
            const today=new Date();
            const job=await new Job({
                title,
                designation,
                typeOfJob,
                companyName,
                datePosted:today,
                description,
                salary
            }).save();
            res.status(200).json(job);    
    } catch (error) {
        res.status(400).json({
            error,
        })
    }    
}

export const allJobs= async (req,res) =>{
    const allJobs=await Job.find();
    res.status(200).json(allJobs);
}
