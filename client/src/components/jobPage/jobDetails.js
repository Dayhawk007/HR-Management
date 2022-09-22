import React from 'react'

const jobDetails = (props) => {
  const job=props.job;
  const datePostedFormat=new Date(job.datePosted);
  const dpf=`${datePostedFormat.getDay()}/${datePostedFormat.getMonth()}/${datePostedFormat.getFullYear()}`;
  return (
    <div className="flex flex-row space-x-4 py-4 px-4">
        <div className="flex flex-col h-fit divide-y-2 space-y-6 w-4/6 bg-white rounded-md px-8 py-4">
            <div className='flex flex-col pt-2 space-y-2'>
                <span className='font-bold text-lg'>Job Title</span>
                <span className='text-2xl'>{job.title}</span>
            </div>
            <div className='flex flex-col pt-2 space-y-2'>
                <span className='font-bold text-lg'>Job Description</span>
                <span className='text-base'>{job.description}</span>
            </div>
        </div>
        <div className='flex flex-col w-2/6 bg-white rounded-md px-8 py-4 divide-y-2'>
            <span className='font-bold'>Job Details</span>
            <div className="flex flex-col space-y-4 py-4">
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Job creation date</span>
                    <span>{dpf}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Recruitment period</span>
                    <span>01/03/21 to 01/04/21</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Department</span>
                    <span>{job.designation}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Recruitment Quota</span>
                    <span>{job.quota}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Job type</span>
                    <span>{job.typeOfJob}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Experience</span>
                    <span>{job.experience}+yrs</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Location</span>
                    <span>{job.location}</span>
                </div>
                <div className="flex flex-col space-y-1">
                    <span className="text-sm text-slate-500">Salary</span>
                    <span>{job.salary}</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default jobDetails