import Sidebar from "../components/Sidebar";
import Jobs from "../components/Jobs";

const HomeScreen= () =>{
    return(
        <div className="flex flex-row container">
            <Sidebar/>
            <Jobs/>
        </div>
    )
};

export default HomeScreen;