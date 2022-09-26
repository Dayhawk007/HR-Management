import Logo from "../images/tiimi-logo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {SidebarData} from "../data/data.js";
import { useState } from "react";
import { faBars, faCircleXmark, faHamburger } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Sidebar = () =>{
    const [isOpen, setIsOpen] = useState(false);
    const sideBarHandler = () =>{
        setIsOpen(!isOpen);
    };
    return(
        <>
            <div className={`hidden container py-3 space-y-2 px-6  bg-slate-800 text-white md:flex md:w-72 md:h-screen`}>
                <div className="flex-col">
                    <Link to="/">
                        <img src={Logo} className="w-120 h-36 items-left -ml-8" alt="Logo"></img>
                    </Link>
                    <ul className="flex flex-col items-left text-lg space-y-6">
                        {SidebarData.map((item,index)=>{
                            return(
                                <Link to={item.path} className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-400 hover:text-black">
                                    <FontAwesomeIcon icon={item.icon} />
                                    <span>{item.title}</span>
                                </Link>        
                            );
                        })}
                    </ul>
                </div>
            </div>
            <div className="block md:hidden items-center py-3 px-3 w-max bg-slate-800 text-white" onClick={sideBarHandler}>
                 { isOpen ? <FontAwesomeIcon icon={faCircleXmark}/> : <FontAwesomeIcon icon={faBars}/>}
                 <div className={isOpen ? "flex-col ease-in-out duration-500 h-screen w-full" : "hidden"}>
                    <img src={Logo} className="w-120 h-36 items-left -ml-8" alt="Logo"></img>
                    <ul className="flex flex-col items-left text-lg space-y-6">
                        {SidebarData.map((item,index)=>{
                            return(
                                <a href="#" className="space-x-6 rounded-md px-6 py-3 hover:bg-yellow-400 hover:text-black">
                                        <FontAwesomeIcon icon={item.icon} />
                                        <span>{item.title}</span>
                                </a>        
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>

    );

};

export default Sidebar;