import axios from "axios"
import { useEffect,useState } from "react";
import {PieChart} from 'react-minimal-pie-chart';

const ApplicationsSummary = () => {

    const [jobs,setjobs] = useState({})

    const getJobs = async() =>{
        const {data}= await axios.get("/dashboard/jobsSummary");
        setjobs(data);
    }
    useEffect(()=>{
        getJobs();
    })

  return (
                <div className='flex flex-col h-max rounded-md w-full bg-white p-3 divide-y-2'>
                    <div className='text-xl'>Jobs Summary</div>
                    <div className='flex flex-row py-4 px-2 space-x-4 items-center'>
                        <div className='flex w-2/3 h-36'>
                            <PieChart data={[{title:"Design",value:jobs.design,color:'#4ade80'},{title:"Development",value:jobs.development,color:'#f472b6'},{title:"Marketing",value:jobs.marketing,color:'#fb923c'},{title:"HR",value:jobs.hr,color:'#f87171'}]} />
                        </div>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex border-l-2 px-2 border-[#4ade80] flex-row space-x-2'>
                                <span className='text-slate-400'>Design</span>
                                <span className='font-bold'>{jobs.design}</span>
                            </div>
                            <div className='flex border-l-2 px-2 border-[#f472b6] flex-row space-x-2'>
                                <span className='text-slate-400'>Development</span>
                                <span className='font-bold'>{jobs.development}</span>
                            </div>
                            <div className='flex border-l-2 px-2 border-[#fb923c] flex-row space-x-2'>
                                <span className='text-slate-400'>Marketing</span>
                                <span className='font-bold'>{jobs.marketing}</span>
                            </div>
                            <div className='flex  border-l-2 px-2 border-[#f87171] flex-row space-x-2'>
                                <span className='text-slate-400'>HR</span>
                                <span className='font-bold'>{jobs.hr}</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ApplicationsSummary