import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";
import JobPage from "../components/jobPage"
import AddJob from "../components/jobPage/AddJob";
import Dashboard from "../components/Dashboard";
import {Routes,Route} from 'react-router-dom';
const HomeScreen= () =>{
    return(
        <div className="flex flex-row container">
            <Sidebar/>
            <Routes>
                <Route path="/dashboard" element={<Dashboard/>} exact/>
                <Route path="/" element={<Dashboard/>} exact/>
                <Route path="/jobs" element={<Jobs/>} exact />
                <Route path="/jobs/createJob" element={<AddJob/>} exact />
                <Route path="/jobs/:id" element={<JobPage/>}  exact/>
            </Routes>
        </div>
    )
};

export default HomeScreen;