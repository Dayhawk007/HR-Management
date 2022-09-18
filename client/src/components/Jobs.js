import { JobsData } from "../data/data.js";

const Jobs= () => {
    return(
        <div className="flex relative flex-col space-x-6 px-12 py-6 bg-slate-300">
            <div className="flex py-3 ml-6 flex-row space-x-3 justify-start text-lg">
                <span>Active Jobs</span>
                <span className="text-slate-500">Inactive Jobs</span>
            </div>
            <div className="grid grid-cols-1 gap-4 overflow-scroll md:grid-cols-2 lg:grid-cols-4">
                {JobsData.map((item,index) =>{
                    return(
                        <div className="flex flex-col w-60 py-3 px-6 text-base h-72 bg-white rounded-md shadow-md divide-y-2">
                            <div className="flex flex-col w-max">
                                <span className="text-slate-500 font-normal">{item.desgination}</span>
                                <span className="font-bold mb-3">{item.title}</span>
                                <span className="text-slate-500 font-normal">Candidates:</span>
                                <div className="flex flex-row space-x-10 p-3 rounded-md border-1 border-black h-max w-50 mt-4 bg-slate-300">
                                    <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                        <span className="text-slate-500 text-sm font-normal">Total</span>
                                        <span className="text-black text-lg font-bold">{item.totalCandidates}</span>
                                    </div>
                                    <div className="flex flex-col px-1 border-l-2 border-stone-500">
                                        <span className="text-slate-500 text-sm font-normal">New</span>
                                        <span className="text-black text-lg font-bold">{item.newCandidates}</span>
                                    </div>
                                </div>
                                <div className="flex flex-row text-sm justify-between space-x-2 text-slate-500">
                                    <span>{item.companyName}</span>
                                    <span>{item.jobType}</span>
                                </div>
                            </div>
                            <a href="#" className="self-center text-lg font-bold mt-10">
                                    <span>See details</span>
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    )
}

export default Jobs;