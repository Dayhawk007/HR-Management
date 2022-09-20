import { Link } from "react-router-dom"

const Pipeline = () => {
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
                    <div className="flex flex-row items-center space-x-4 py-2 px-4">
                        <div className='flex flex-col w-4/12'>
                            <span className='text-base font-bold'>Senior UI UX Designer</span>
                            <span className='text-sm'>Total Applicants: 126</span>
                        </div>
                        <div className='flex p-2 bg-green-400 items-center h-10 w-32 text-sm text-white'>
                            <span className='mx-auto'>30 Candidates</span>
                        </div>
                        <div className='flex p-2 bg-pink-400 items-center h-10 w-32 text-sm text-white'>
                            <span className='mx-auto'>20 Candidates</span>
                        </div>
                        <div className='flex p-2 bg-orange-400 items-center h-10 w-32 text-sm text-white'>
                            <span className='mx-auto'>50 Candidates</span>
                        </div>
                        <div className='flex p-2 bg-red-400 items-center h-10 w-32 text-sm text-white'>
                            <span className='mx-auto'>26 Candidates</span>
                        </div>
                    </div>
                </div>
  )
}

export default Pipeline