import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import GoogleSignIn from "../hooks/GoogleSignIn";
import useAxios from "../hooks/useAxios";
// import usePublic from "../hooks/useAxios";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { createUser, profileUpdate } = useAuth()
    const navigate = useNavigate()
    const usePublic = useAxios()
    const onSubmit = data => {
        // console.log(data)
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user
            // console.log(loggedUser);
            profileUpdate(data.name, data.photoURL)
                .then(() => {
                    // console.log('update success');
                    const userInfo = {
                        name: data.name,
                        email: data.email,
                        photoURL: data.photoURL
                    }
                    usePublic.post('/users', userInfo)
                        .then(result => {
                            if (result.data.insertedId) {
                                reset();
                                navigate('/')
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: `Successful`,
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                            }
                        })

                })
                .catch(err => {
                    // console.log(err);
                    toast(err.message)
                })
        })


}
    return (

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
               <div className="hero-overlay bg-opacity-60"></div>
            
            
            <div><Toaster /></div>
            <div className="  text-center flex-col lg:flex-row-reverse text-yellow-500">
                
                <div className=" lg:m-36 rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <h2 className="text-center text-4xl font-mono">Sign Up Here!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}

                        </div>

                        {/* photo url  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Photo Url</span>
                            </label>
                            <input type="url" {...register("photoUrl", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-500">Photo Url is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,})}

                                placeholder="password" className="input input-bordered" />


                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-stone-100">Forgot password?</a>
                            </label>
                        </div>
                        <input type="Submit" value="Sign Up" className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" />
                    </form>

                    <GoogleSignIn></GoogleSignIn>
                    <p className='text-center  mb-4'>Already have an account? <Link to='/login' className='text-[#BB8506]'>Please Log In</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;