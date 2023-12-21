import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import useAuth from '../hooks/useAuth'

const Dashboard = () => {
    const { user } = useAuth()
    return (
        <div>
            <div className="flex min-h-screen  ">
                <div className=" w-64 min-h-screen bg-slate-400">
                    <ul className="menu text-xl p-4">

                       
                            <h2 className="">User Profile</h2>
                        <div className="avatar">
                            <li className="w-24 mask mask-squircle">
                                <img className="mx-auto items-center flex justify-center" src={user?.photoURL} />
                            </li>
                            
                        </div>
                        <h2 className="overflow-x-hidden -px-20">{user?.displayName}</h2>
                        <li>
                                <NavLink to="/dashboard/create">Task Create </NavLink>
                            </li>
                        <>
                        <div className="divider divider-info"></div>
                            <li>
                                <NavLink to="/">Home</NavLink>
                            </li>

                        </>

                    </ul>
                </div>
                <div className="flex-1">
                    <Navbar></Navbar>
                    <Outlet ></Outlet>


                </div>
            </div>
        </div>
    );
};

export default Dashboard;