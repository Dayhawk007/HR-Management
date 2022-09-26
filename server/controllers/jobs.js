import Job from "../models/jobs.js";

export const jobCreator= async (req,res) =>{
    try {
            const{
                title,
                designation,
                typeOfJob,
                companyName,
                experience,
                location,
                quota,
                description,
                salary,
            }=req.body;
            const today=new Date();
            const currentCandidates=await Job.count();
            const job=await new Job({
                title,
                designation,
                numberOfCandidates:currentCandidates+1,
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

export const jobSummary= async (req,res) => {
    try {
        const jobs=await Job.find();
        var design=0,development=0,marketing=0,hr=0;
        for(var i=0;i<jobs.length;i++){
            if(jobs[i].designation=="Design"){
                design++;
            }
            else if(jobs[i].designation=="Development"){
                development++;
            }
            else if(jobs[i].designation=="Marketing"){
                marketing++;
            }
            else if(jobs[i].designation=="HR"){
                hr++;
            }
        }
        res.status(200).json({design,development,marketing,hr});
    } catch (error) {
        res.status(500).json({
            error
        })
    }
}