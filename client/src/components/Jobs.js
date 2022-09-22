import { JobsData } from "../data/data.js";
import axios from 'axios';
import { useEffect,useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
const Jobs= () => {

    const [jobs, setjobs] = useState([]);

    const allJobs= async ()=>{
        const {data}=await axios.get("/jobs/allJobs");
        setjobs(data);
    }
    useEffect(()=>{
        allJobs();
    });
    return(
        <div className="flex relative flex-col space-x-6 w-screen px-12 py-6 bg-slate-300">
            <div className="flex py-3 ml-6 items-center flex-row space-x-3 justify-between text-lg">
                <span>Active Jobs</span>
                <div className="flex flex-row py-2 items-center space-x-2 px-4 bg-yellow-300 rounded-full">
                    <Link to="./createJob">
                        <span>Add job</span>
                        <FontAwesomeIcon icon={faAdd} />
                    </Link>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 overflow-scroll md:grid-cols-2 lg:grid-cols-4">
                {jobs.map((item,index) =>{
                    return(
                        <div className="flex flex-col w-64 py-4 px-6 text-base h-72 bg-white rounded-md shadow-md divide-y-2">
                            <div className="flex flex-col w-max">
                                <span className="text-slate-500 font-normal">{item.designation}</span>
                                <span className="font-bold mb-3">{item.title}</span>
                                <span className="text-slate-500 font-normal">Candidates:</span>
                                <div className="flex flex-row space-x-10 p-3 rounded-md border-1 border-black h-max w-50 mt-4 bg-slate-300">
                                    <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                        <span className="text-slate-500 text-sm font-normal">Total</span>
                                        <span className="text-black text-lg font-bold">{item.numberOfCandidates}</span>
                                    </div>
                                    <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                        <span className="text-slate-500 text-sm font-normal">New</span>
                                        <span className="text-black text-lg font-bold">0</span>
                                    </div>
                                </div>
                                <div className="flex flex-row text-sm justify-between space-x-2 text-slate-500">
                                    <span>{item.companyName}</span>
                                    <span>{item.typeOfJob}</span>
                                </div>
                            </div>
                            <Link to={item._id} className="self-center text-lg font-bold mt-10">
                                    <span>See details</span>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Jobs;