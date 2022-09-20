import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faClose, faPersonRifle } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Link } from 'react-router-dom';

const jobPage = () => {
  return (
    <div className='flex flex-col mx-12 my-8 space-y-8 divide-y-2 w-screen'>
        <div className='flex flex-row items-center justify-start space-x-6'>
            <FontAwesomeIcon icon={faClose} />
            <div className='flex flex-col items-start space-y-2'>
                <span className='text-sm text-slate-500'>DESIGN</span>
                <span className='text-xl'>Senior Product Designer</span>
                <span className='text-sm text-slate-500'>Fawrtech   Full time</span>
            </div>
        </div>
        <div className='flex flex-row px-4 py-2 space-x-12 font-bold text-slate-500'>
            <Link to="/candidate">CANDIDATES</Link>
            <Link to="/details">JOB DETAILS</Link>
        </div>
        <div className='flex flex-col pt-2 font-bold text-sm'>
            <span>Total Candidates : 12</span>
            <div className="flex flex-row mt-2 grid grid-cols-4 divide-x-2 space-x-12">
                <div className='flex flex-col gap-y-4'>
                    <div className='flex flex-row bg-slate-800 text-white py-2 px-4 rounded-md justify-between'>
                        <span>New Applied</span>
                        <span>10</span>
                    </div>
                    <div className='grid grid-rows-3 gap-y-4 overflow-scroll'>
                    <div className='flex flex-col bg-slate-800 text-lg font-normal text-white py-2 px-4 rounded-md divide-y-2'>
                        <div className='flex flex-row space-x-4 items-center py-4 px-2'>
                            <FontAwesomeIcon icon={faPersonRifle}/>
                            <span>Esther Howard</span>
                        </div>
                        <div className="flex flex-row text-sm font-light items-center px-2 py-2 justify-between">
                            <span>Ratings</span>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className='flex flex-col bg-slate-800 text-lg font-normal text-white py-2 px-4 rounded-md divide-y-2'>
                        <div className='flex flex-row space-x-4 items-center py-4 px-2'>
                            <FontAwesomeIcon icon={faPersonRifle}/>
                            <span>Esther Howard</span>
                        </div>
                        <div className="flex flex-row text-sm font-light items-center px-2 py-2 justify-between">
                            <span>Ratings</span>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className='flex flex-col bg-slate-800 text-lg font-normal text-white py-2 px-4 rounded-md divide-y-2'>
                        <div className='flex flex-row space-x-4 items-center py-4 px-2'>
                            <FontAwesomeIcon icon={faPersonRifle}/>
                            <span>Esther Howard</span>
                        </div>
                        <div className="flex flex-row text-sm font-light items-center px-2 py-2 justify-between">
                            <span>Ratings</span>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    <div className='flex flex-col bg-slate-800 text-lg font-normal text-white py-2 px-4 rounded-md divide-y-2'>
                        <div className='flex flex-row space-x-4 items-center py-4 px-2'>
                            <FontAwesomeIcon icon={faPersonRifle}/>
                            <span>Esther Howard</span>
                        </div>
                        <div className="flex flex-row text-sm font-light items-center px-2 py-2 justify-between">
                            <span>Ratings</span>
                            <span>2 days ago</span>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default jobPage