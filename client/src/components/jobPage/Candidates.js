import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useEffect,useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const Candidate= () =>{

    const [newCandidates, setnewCandidates] = useState([])
    const [screenCandidates, setscreenCandidates] = useState([])
    const [interviewCandidates, setinterviewCandidates] = useState([])
    const [hiredCandidates, sethiredCandidates] = useState([])
    
    const params=useParams();
    const getCandidateInfo= async() =>{
        const {data}=await axios.get(`http://localhost:5000/jobs/allJobs/${params.id}/getApplicationsById`);
        setnewCandidates(data.nw);
        setscreenCandidates(data.screen);
        setinterviewCandidates(data.interv);
        sethiredCandidates(data.hired);
    };
    useEffect(() =>{
        getCandidateInfo();
    });

    return(
        <>
        <div className='flex flex-row max-h-[500px] overflow-scroll space-x-10 my-4 divide-x-4'>
                <div className='flex flex-col w-3/12 py-4 px-2 gap-y-4'>
                    <div className='flex flex-row bg-white rounded-md justify-between px-4 py-2 border-t-4 border-green-400'>
                        <span className='font-bold'>New Applied</span>
                        <span className='font-light'>{newCandidates.length}</span>
                    </div>
                    {newCandidates.map((item,index)=>(
                        <div className="flex flex-col bg-white rounded-md divide-y-2 p-2">
                            <div className="flex flex-row justify-start p-4 space-x-2 items-center">
                                <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                                <span className="text-lg">{item.name}</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 space-x-2 items-center">
                                <span>Ratings</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-3/12 py-4 px-2 gap-y-4'>
                    <div className='flex flex-row bg-white rounded-md justify-between px-4 py-2 border-t-4 border-blue-400'>
                        <span className='font-bold'>Screening</span>
                        <span className='font-light'>{screenCandidates.length}</span>
                    </div>
                    {screenCandidates.map((item,index)=>(
                        <div className="flex flex-col bg-white rounded-md divide-y-2 p-2">
                            <div className="flex flex-row justify-start p-4 space-x-2 items-center">
                                <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                                <span className="text-lg">{item.name}</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 space-x-2 items-center">
                                <span>Ratings</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-3/12 py-4 px-2 gap-y-4'>
                    <div className='flex flex-row bg-white rounded-md justify-between px-4 py-2 border-t-4 border-purple-400'>
                        <span className='font-bold'>Interview</span>
                        <span className='font-light'>{interviewCandidates.length}</span>
                    </div>
                    {interviewCandidates.map((item,index)=>(
                        <div className="flex flex-col bg-white rounded-md divide-y-2 p-2">
                            <div className="flex flex-row justify-start p-4 space-x-2 items-center">
                                <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                                <span className="text-lg">{item.name}</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 space-x-2 items-center">
                                <span>Ratings</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='flex flex-col w-3/12 py-4 px-2 gap-y-4'>
                    <div className='flex flex-row bg-white rounded-md justify-between px-4 py-2 border-t-4 border-orange-400'>
                        <span className='font-bold'>Hired</span>
                        <span className='font-light'>{hiredCandidates.length}</span>
                    </div>
                    {hiredCandidates.map((item,index)=>(
                        <div className="flex flex-col bg-white rounded-md divide-y-2 p-2">
                            <div className="flex flex-row justify-start p-4 space-x-2 items-center">
                                <FontAwesomeIcon icon={faUserCircle} size="2x"/>
                                <span className="text-lg">{item.name}</span>
                            </div>
                            <div className="flex flex-row justify-between px-4 py-2 space-x-2 items-center">
                                <span>Ratings</span>
                                <span>2 days ago</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Candidate;