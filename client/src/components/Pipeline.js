import { Link } from "react-router-dom"
import axios from 'axios';
import { useEffect,useState } from "react";

const Pipeline = () => {
    const [pipeline, setpipeline] = useState([])

    const getData = async() =>{
        const {data}=await axios.get("/jobs/getAllJobDetails");
        setpipeline(data);
    }

    useEffect(()=>{
        getData();
    })
  return (
                <div className='flex flex-col col-span-3 h-max rounded-md bg-white p-3 divide-y-2'>
                    <div className="flex flex-row items-center justify-between space-x-2">
                        <span className='text-xl font-bold'>Hiring Pipeline</span>
                        <Link to="/jobs">View All Jobs</Link>
                    </div>
                    <div className='flex flex-row items-center self-center py-2 px-4 text-slate-500 text-sm w-full'>
                        <span className='w-4/12'>Jobs</span>
                        <span className='w-2/12 text-center'>New Applied</span>
                        <span className='w-2/12 text-center'>Screening</span>
                        <span className='w-2/12 text-center'>Interview</span>
                        <span className='w-2/12 text-center'>Selected</span>
                    </div>
                    {pipeline.map((item,index)=>(
                        <div className="flex flex-row items-center space-x-4 py-2 px-4">
                            <div className='flex flex-col w-4/12'>
                                <span className='text-base font-bold'>{item.job.title}</span>
                                <span className='text-sm'>Total Applicants: {item.job.numberOfCandidates}</span>
                            </div>
                            <div className='flex p-2 bg-green-400 items-center h-10 w-32 text-sm text-white'>
                                <span className='mx-auto'>{item.new_candi} Candidates</span>
                            </div>
                            <div className='flex p-2 bg-pink-400 items-center h-10 w-32 text-sm text-white'>
                                <span className='mx-auto'>{item.screen_candi} Candidates</span>
                            </div>
                            <div className='flex p-2 bg-orange-400 items-center h-10 w-32 text-sm text-white'>
                                <span className='mx-auto'>{item.interview_candi} Candidates</span>
                            </div>
                            <div className='flex p-2 bg-red-400 items-center h-10 w-32 text-sm text-white'>
                                <span className='mx-auto'>{item.hired_candi} Candidates</span>
                            </div>
                        </div>
                    ))}
                    
                </div>
  )
}

export default Pipeline