import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd,faClock,faCheck } from '@fortawesome/free-solid-svg-icons';
const Tasks = () => {
  return (
                <div className='flex flex-col col-span-3 gap-y-2'>
                    <div className='flex p-4 flex-row bg-white rounded-md items-center justify-between'>
                        <span className='text-xl font-bold'>My Tasks</span>
                        <div className='flex flex-row border-2 space-x-2 py-1 px-2 rounded-sm border-slate-500 items-center'>
                            <FontAwesomeIcon icon={faAdd} />
                            <span className='text-sm'>Add task</span>
                        </div>
                    </div>
                    <div className='flex px-4 py-2 flex-row bg-white rounded-md items-center justify-between'>
                        <div className='flex flex-row space-x-4'>
                            <div className="flex flex-row space-x-2 pr-4 items-center text-slate-500 text-sm border-r-2 border-slate-300">
                                <FontAwesomeIcon icon={faClock}/>
                                <span>07:00-07:30 AM</span>
                            </div>
                            <span>Interview with all candidates from product designer applicants</span>
                        </div>
                            <FontAwesomeIcon className='' icon={faCheck} />
                    </div>
                    <div className='flex px-4 py-2 flex-row bg-white rounded-md items-center justify-between'>
                        <div className='flex flex-row space-x-4'>
                            <div className="flex flex-row space-x-2 pr-4 items-center text-slate-500 text-sm border-r-2 border-slate-300">
                                <FontAwesomeIcon icon={faClock}/>
                                <span>08:00-08:30 AM</span>
                            </div>
                            <span>Have a meeting with the team regarding new hires</span>
                        </div>
                            <FontAwesomeIcon className='' icon={faCheck} />
                    </div>
                    <div className='flex px-4 py-2 flex-row bg-white rounded-md items-center justify-between'>
                        <div className='flex flex-row space-x-4'>
                            <div className="flex flex-row space-x-2 pr-4 items-center text-slate-500 text-sm border-r-2 border-slate-300">
                                <FontAwesomeIcon icon={faClock}/>
                                <span>10:00-11:00 AM</span>
                            </div>
                            <span>Contact new applicants for Internship</span>
                        </div>
                            <FontAwesomeIcon className='' icon={faCheck} />
                    </div>
                </div>
  )
}

export default Tasks