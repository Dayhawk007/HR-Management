import Job from '../models/jobs.js';
import Applications from "../models/application.js"


export const createApplication = async (req, res) => {
    try {
        const job_id = req.params.id;
        const { name,
            email,
            candidateStatus,
        } = req.body;

        const application = new Applications({
            name,
            email,
            candidateStatus,
            job: job_id
        });

        await application.save();
        const jobById = await Job.findById(job_id);
        jobById.applications.push(application);
        jobById.update({ numberOfCandidates: jobById.numberOfCandidates++ });
        await jobById.save();
        res.status(200).json(application);
    } catch (error) {
        res.status(500).json(
            { "error": error }
        )
    }
};

export const getAllApplicationsById = async (req, res) => {
    try {
        const id = req.params.id;
        const jobDetailed = await Job.findById(id).populate("applications");
        const applications = jobDetailed.applications;
        var nw = [], screen = [], interv = [], hired = [];

        function pushCandidates(status, item) {
            const pushObject = {
                New: () => nw.push(item),
                Screening: () => screen.push(item),
                Interview: () => interv.push(item),
                Hired: () => hired.push(item),
            }
            return pushObject[status]();
        }

        const countCandi = (item) => {
            pushCandidates(item.candidateStatus, item);
        }

        applications.forEach(countCandi)
        res.status(200).json({ nw, screen, interv, hired });
    } catch (error) {
        res.status(500).json({
            "error": error
        })
    }
}


export const getAllJobDetails = async (req, res) => {
    try {
        const jobDetailed = await Job.find().populate("applications");
        const jobsWithDetails = [];
        for (var i = 0; i < jobDetailed.length; i++) {
            var new_candi = 0, screen_candi = 0, interview_candi = 0, hired_candi = 0;
            for (var j = 0; j < jobDetailed[i].applications.length; j++) {
                if (jobDetailed[i].applications[j].candidateStatus == "New") {
                    new_candi++;
                }
                else if (jobDetailed[i].applications[j].candidateStatus == "Screening") {
                    screen_candi++;
                }
                else if (jobDetailed[i].applications[j].candidateStatus == "Interview") {
                    interview_candi++;
                }
                else if (jobDetailed[i].applications[j].candidateStatus == "Hired") {
                    hired_candi++;
                }
            }
            jobsWithDetails.push({
                job: jobDetailed[i],
                new_candi,
                screen_candi,
                interview_candi,
                hired_candi,
            });
        }
        res.status(200).json(jobsWithDetails);
    } catch (error) {
        res.status(500).json({
            "error": error
        })
    }
}



