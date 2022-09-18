import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='h-screen w-screen bg-slate-300'>
        <div className='flex flex-col mx-4 my-3 px-3 w-5/6'>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-2xl'>Dashboard</span>
            </div>
            <div className='grid gap-4 grid-cols-4'>
                <div className='flex flex-col col-span-3 h-max rounded-md bg-white p-3 divide-y-2'>
                    <div className="flex flex-row justify-between space-x-2">
                        <span className='text-xl font-bold'>Hiring Pipeline</span>
                        <Link to="/jobs">View All Jobs</Link>
                    </div>
                    <div className='flex flex-row items-center py-2 px-4 text-slate-500 text-sm w-full'>
                        <span className='w-4/12'>Jobs</span>
                        <span className='w-2/12'>New Applied</span>
                        <span className='w-2/12'>Screening</span>
                        <span className='w-2/12'>Interview</span>
                        <span className='w-2/12'>Selected</span>
                    </div>
                </div>
                <div className='flex flex-col h-max rounded-md w-full bg-white p-3 divide-y-2'>
                    <div className='text-xl'>Jobs Summary</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard