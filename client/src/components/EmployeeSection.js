import React from 'react'
import { Link } from 'react-router-dom'

const EmployeeSection = () => {
  return (
                <div className='flex flex-col bg-white rounded-md px-4 py-4 divide-y-2'>
                    <div className='flex flex-row items-center justify-between'>
                        <span className="text-xl font-bold">Employees</span>
                        <Link className='text-sm'>View all</Link>
                    </div>
                    <div className="flex flex-col py-2 space-y-2">
                        <div className="flex flex-row items-center p-2 rounded-md bg-slate-200 justify-between">
                            <span className='text-base font-bold'>Design Team</span>
                            <span className='text-sm'>Total members: <span className='font-bold'>12</span></span>
                        </div>
                    </div>
                    <div className="flex flex-col py-2 space-y-2">
                        <div className="flex flex-row items-center p-2 rounded-md bg-slate-200 justify-between">
                            <span className='text-base font-bold'>Development</span>
                            <span className='text-sm'>Total members: <span className='font-bold'>20</span></span>
                        </div>
                    </div>
                    <div className="flex flex-col py-2 space-y-2">
                        <div className="flex flex-row items-center p-2 rounded-md bg-slate-200 justify-between">
                            <span className='text-base font-bold'>Marketing Team</span>
                            <span className='text-sm'>Total members: <span className='font-bold'>5</span></span>
                        </div>
                    </div>  
                    <div className="flex flex-col py-2 space-y-2">
                        <div className="flex flex-row items-center p-2 rounded-md bg-slate-200 justify-between">
                            <span className='text-base font-bold'>HR team</span>
                            <span className='text-sm'>Total members: <span className='font-bold'>4</span></span>
                        </div>
                    </div>  
                </div>
  )
}

export default EmployeeSection