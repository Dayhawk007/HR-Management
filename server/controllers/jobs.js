import Job from "../models/jobs.js";

export const jobCreator= async (req,res) =>{
    try {
            const{
                title,
                designation,
                numberOfCandidates,
                typeOfJob,
                companyName,
                experience,
                location,
                quota,
                description,
                salary,
            }=req.body;
            const today=new Date();
            const job=await new Job({
                title,
                designation,
                numberOfCandidates,
                typeOfJob,
                companyName,
                datePosted:today,
                lastDate: new Date("2022-10-22"),
                experience,
                location,
                quota,
                description,
                salary
            }).save();
            res.status(200).json(job);
            console.log(job);    
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

export const individualJob = async(req,res) =>{
    try {
        const job=await Job.findById(req.params.id);
        res.json(job);    
    } catch (error) {
        res.status(500).json({
            "error":error,
        });
    }
    
}