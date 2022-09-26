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
};

export const getAllApplicationsById= async(req,res) => {
    try {
        const id= req.params.id;
        const jobDetailed=await Job.findById(id).populate("applications");
        const applications=jobDetailed.applications;
        var nw=[],screen=[],interv=[],hired=[];
        const countCandi = (item) =>{
            if(item.candidateStatus=="New"){
                nw.push(item);
            }
            else if(item.candidateStatus=="Screening"){
                screen.push(item);
            }
            else if(item.candidateStatus=="Interview"){
                interv.push(item);
            }
            else if(item.candidateStatus=="Hired"){
                hired.push(item);
            }
        }
        applications.forEach(countCandi)
        res.status(200).json({nw,screen,interv,hired});
    } catch (error) {
        res.status(500).json({
            "error":error
        })
    }
}


export const getAllJobDetails= async(req,res) => {
    try {
        const jobDetailed=await Job.find().populate("applications");
        const jobsWithDetails=[];
        for(var i=0;i<jobDetailed.length;i++){
            var new_candi=0,screen_candi=0,interview_candi=0,hired_candi=0;
            for(var j=0;j<jobDetailed[i].applications.length;j++){
                if(jobDetailed[i].applications[j].candidateStatus=="New"){
                    new_candi++;
                }
                else if(jobDetailed[i].applications[j].candidateStatus=="Screening"){
                    screen_candi++;
                }
                else if(jobDetailed[i].applications[j].candidateStatus=="Interview"){
                    interview_candi++;
                }
                else if(jobDetailed[i].applications[j].candidateStatus=="Hired"){
                    hired_candi++;
                }
            }
            jobsWithDetails.push({
                job:jobDetailed[i],
                new_candi,
                screen_candi,
                interview_candi,
                hired_candi,
            });
        }
        res.status(200).json(jobsWithDetails);
    } catch (error) {
        res.status(500).json({
            "error":error
        })
    }
}



