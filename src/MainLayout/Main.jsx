import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";


const Main = () => {
    return (
        <div >
           <Navbar></Navbar>
           <div className="mx-auto container">
           <Outlet></Outlet> 
           </div>
        </div>
    );
};

export default Main;