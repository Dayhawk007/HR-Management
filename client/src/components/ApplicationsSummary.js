
const ApplicationsSummary = () => {
  return (
                <div className='flex flex-col h-max rounded-md w-full bg-white p-3 divide-y-2'>
                    <div className='text-xl'>Jobs Summary</div>
                    <div className='flex flex-row py-4 px-2 space-x-4 items-center'>
                        <div className='flex w-2/3 h-36 bg-green-400 rounded-full'></div>
                        <div className='flex flex-col space-y-4'>
                            <div className='flex flex-row space-x-2'>
                                <span className='text-slate-400'>Published</span>
                                <span className='font-bold'>14</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span className='text-slate-400'>Internal</span>
                                <span className='font-bold'>2</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span className='text-slate-400'>Private</span>
                                <span className='font-bold'>2</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span className='text-slate-400'>On hold</span>
                                <span className='font-bold'>2</span>
                            </div>
                            <div className='flex flex-row space-x-2'>
                                <span className='text-slate-400'>Closed</span>
                                <span className='font-bold'>4</span>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default ApplicationsSummary