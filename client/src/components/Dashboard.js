import { faAdd, faCheck, faClock, faListCheck, faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import ApplicationsSummary from './ApplicationsSummary'
import EmployeeSection from './EmployeeSection'
import Pipeline from './Pipeline'
import Tasks from './Tasks'
const Dashboard = () => {
  return (
    <div className='h-screen w-screen bg-slate-300'>
        <div className='flex flex-col mx-4 my-3 px-3'>
            <div className='flex justify-between items-center mb-4'>
                <span className='text-2xl'>Dashboard</span>
            </div>
            <div className='grid gap-4 grid-cols-4'>
                <Pipeline />
                <ApplicationsSummary/>
                <Tasks/>
                <EmployeeSection/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard