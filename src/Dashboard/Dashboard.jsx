import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Dashboard = () => {
    return (
        <div>
            <div className="flex min-h-screen lg:min-h-screen bg-emerald-500">
                <div className=" min-h-screen bg-slate-400">
                    <ul className="menu text-xl p-4">
                        <>
                            <li>
                                <NavLink to="">User Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>

                        </>
                        
                    </ul>
                </div>
                <div className="flex-1 ml-5">
                    <Navbar></Navbar>
                    <Outlet className=' min-h-screen bg-emerald-300'></Outlet>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;