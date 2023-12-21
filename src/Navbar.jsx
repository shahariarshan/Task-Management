import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(err => {
                console.log(err);
            })
    }


    const navLink =
        (
            <>
                <li className="hover:text-green-400 link-hover "><a href='/'>Home</a></li>
                <li className="hover:text-green-400 link-hover "><a>Contact</a></li>
                <li className="hover:text-green-400 link-hover "><a href="/dashboard">Dashboard</a></li>

            </>
        )
    return (
        <header className='max-w-screen-2xl top-0 left-0 right-0 transition-all duration-300 ease-in-out'>
            <div className="navbar xl:px-24  h-24 shadow-md bg-base-100 transition-all duration-300 ease-in-out">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3  p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a href="/">  <img className='h-16 w-16' src="../public/Untitled_design__1_-removebg-preview.png" alt="" /></a>
                    <h1 className="text-xl font-bold -mr-10 lg:ml-2 ">Task <span className="text-green-500">Management</span></h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                </div>
                <div className="navbar-end">



                     <div>
                   {
                        user ? <>
                            {/* <span>{user?.displayName}</span> */}
                            <><NavLink onClick={handelLogOut}>LogOut</NavLink></>
                        </> :
                            <>
                                <><NavLink className='btn hover:text-green-400 link-hover' to='/login'>Login</NavLink></>
                            </>
                    }
                   </div> 
                   
                   
                </div>
            </div>
        </header>
    );
};

export default Navbar;