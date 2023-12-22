
import { FaGoogle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import useAxios from "./useAxios";


const GoogleSignIn = () => {
    const {googleSignIn}=useAuth()
    const navigate = useNavigate()
    const axo=useAxios()
    const handleGooglePopUp=()=>{
        googleSignIn()
        
        .then(result =>{
            console.log(result.user);
            const userInfo={
                email:result.user.email,
                name:result.user.displayName
            }
            axo.post('/users',userInfo)
            .then(result =>{
                console.log(result.data );
                navigate('/')
            })
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