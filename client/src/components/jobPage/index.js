import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClose, faPersonRifle, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect ,useState} from 'react'
import {Routes,Route, useParams} from 'react-router-dom';
import { Link,NavLink } from 'react-router-dom';
import Candidate from './Candidates';
import JobDetails from './jobDetails';
import axios from 'axios';
const JobPage = () => {
  const [tab, setTab] = useState(0);
  const [Job, setJob] = useState({});
  const {id} = useParams();
  const fetchJob=async ()=>{
    const {data}=await axios.get(`/jobs/allJobs/${id}`);
    setJob(data);
  }
  useEffect(()=>{
    fetchJob();
  })

  const candi = () =>{
    setTab(0);
  }
  const jobdet = () =>{
    setTab(1);
  }
  return (
    <div className='flex bg-slate-200 w-screen h-screen overflow-scroll'>
        <div className='flex flex-col mx-12 my-8 space-y-2 divide-y-2 divide-slate-900 w-full'>
            <div className='flex flex-row items-center justify-start space-x-6'>
                <Link to="/jobs"><FontAwesomeIcon icon={faClose} /> </Link>
                <div className='flex flex-col mb-4 items-start space-y-2'>
                    <span className='text-sm text-slate-500'>{Job.designation}</span>
                    <span className='text-xl'>{Job.title}</span>
                    <div className='flex flex-row space-x-4 text-slate-500'><span>{Job.companyName}</span> <span>{Job.typeOfJob} </span></div>
                </div>
            </div>
            <div className='flex flex-row px-4 py-2 space-x-12 font-bold text-slate-500'>
                <NavLink className={`text-black`} onClick={candi}>CANDIDATES</NavLink>
                <NavLink className={`text-black`} onClick={jobdet}>JOB DETAILS</NavLink>
            </div>
            {tab==0 ? <Candidate /> : <JobDetails job={Job} />}
        </div>
    </div>
  )
}

export default JobPage