import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";
import Dashboard from "../components/Dashboard";
import {Routes,Route} from 'react-router-dom';
const HomeScreen= () =>{
    return(
        <div className="flex flex-row container">
            <Sidebar/>
            <Routes>
                <Route path="/jobs" element={<Jobs/>} exact />
                <Route path="/dashboard" element={<Dashboard/>} exact/>
            </Routes>
        </div>
    )
};

export default HomeScreen;