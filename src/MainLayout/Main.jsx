import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Home/Footer";


const Main = () => {
    return (
        <div >
           <Navbar></Navbar>
           <div className="mx-auto container">
           <Outlet></Outlet> 
           </div>
           <Footer/>
        </div>
    );
};

export default Main;