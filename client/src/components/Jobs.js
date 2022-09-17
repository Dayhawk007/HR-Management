const Jobs= () => {
    return(
        <div className="flex flex-col space-x-6 w-2/3 h-screen p-12 bg-slate-300">
            <div className="flex py-6 ml-6 flex-row space-x-3 justify-start text-lg">
                <span>Active Jobs</span>
                <span className="text-slate-500">Inactive Jobs</span>
            </div>
            <div className="grid grid-cols-3 grid-rows-3 gap-4">
                <div className="flex flex-col w-72 py-3 px-6 text-base h-72 bg-white rounded-md shadow-md divide-y-2">
                    <div className="flex flex-col w-max">
                        <span className="text-slate-500 font-normal">Design</span>
                        <span className="font-bold mb-3">Senior UI/UX Developer</span>
                        <span className="text-slate-500 font-normal">Candidates:</span>
                        <div className="flex flex-row space-x-10 p-3 rounded-md border-1 border-black h-max w-50 mt-4 bg-slate-300">
                            <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                <span className="text-slate-500 text-sm font-normal">Total</span>
                                <span className="text-black text-lg font-bold">70</span>
                            </div>
                            <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                <span className="text-slate-500 text-sm font-normal">New</span>
                                <span className="text-black text-lg font-bold">3</span>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between space-x-2 text-slate-400">
                            <span>Fawrtech</span>
                            <span>-Full time</span>
                        </div>
                    </div>
                    <a href="#" className="self-center text-lg font-bold mt-10">
                            <span>See details</span>
                    </a>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
                <div className="flex w-72 h-72 bg-white rounded-md shadow-md">
                    <h2>Job 1</h2>
                </div>
            </div>
        </div>
    )
}

export default Jobs;