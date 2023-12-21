import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";


const GoogleSignIn = () => {
    const {googleSignIn}=useContext(AuthContext)
    const navigate = useNavigate()
    const handleGooglePopUp=()=>{
        googleSignIn()
        
            .then(result =>{
                console.log(result.data );
                navigate('/')
            })
      
    }
    return (

        <div
            className="card-actions">
            <button onClick={handleGooglePopUp} className="btn  text-[#BB8506]  w-full mb-2 border-0 border-b-4 btn-md btn-outline">Login with<FaGoogle></FaGoogle></button>
        </div>

    );
};

export default GoogleSignIn;