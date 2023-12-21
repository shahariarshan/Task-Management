import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import GoogleSignIn from "../hooks/GoogleSignIn";



const SignUp = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()
    const { createUser, profileUpdate } = useAuth()
    const navigate = useNavigate()
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser);
                profileUpdate(data.name, data.photoURL)
                    .then(() => {
                        
                            reset();
                            navigate('/')
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `Update Successful`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                       
                    })
                    .catch(err => {
                        // console.log(err);
                        toast(err.message)
                    })
            })


    }
    return (

        <div className="hero min-h-screen bg-base-200">
            
            <div><Toaster /></div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">SignUp now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-500">Name is required</span>}

                        </div>

                        {/* photo url  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="url" {...register("photoUrl", { required: true })} placeholder="name" className="input input-bordered" />
                            {errors.photoUrl && <span className="text-red-500">Photo Url is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-500">Email is required</span>}

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,})}

                                placeholder="password" className="input input-bordered" />


                            
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
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