import Logo from "../images/tiimi-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDashboard,faInbox,faCalendar,faBriefcase } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () =>{
    return(
        <div className="flex container py-3 space-y-2 h-screen px-6 w-64 bg-slate-800 text-white">
            <div className="flex-col">
                <img src={Logo} className="w-120 h-36 items-left -ml-8" alt="Logo"></img>
                <ul className="flex flex-col items-left text-lg space-y-6">
                    <div className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-400 hover:text-black">
                        <FontAwesomeIcon icon={faDashboard} />
                        <a src="">Dashboard</a>
                    </div>
                    <div className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-500 hover:text-black">
                        <FontAwesomeIcon icon={faInbox} />
                        <a src="">Inbox</a>
                    </div>
                    <div className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-500 hover:text-black">
                        <FontAwesomeIcon icon={faCalendar} />
                        <a src="">Calender</a>
                    </div>
                    <div className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-500 hover:text-black">
                        <FontAwesomeIcon icon={faBriefcase} />
                        <a src="">Jobs</a>
                    </div>
                </ul>
            </div>
        </div>
    )

};

export default Sidebar;