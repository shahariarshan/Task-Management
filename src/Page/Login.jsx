import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignIn from "../hooks/GoogleSignIn";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";



const Login = () => {
    const {signIn} =useAuth()
    const navigate =useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname|| '/'
    const handelLoginForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);
        


        event.target.reset();
        signIn(email,password)
        .then(result => {
            const user =result.user
            console.log(user);
            // toast('User logged in')
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `User logged in`,
                showConfirmButton: false,
                timer: 1500
            });
        })
        navigate (from,{replace:true})
    
    }

    return (

        //     {/* <Helmet>
        //     <title>
        //         Pooling & Survey | Login
        //     </title>
        // </Helmet> */}


        <div className="hero min-h-screen text-yellow-500" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
             
            <div className="hero-overlay bg-opacity-60"></div>
            
            <div className="hero-content  text-center ">
                 
                <div className="lg:m-36 rounded-lg flex-shrink-0 w-full max-w-sm shadow-2xl">
                
                    <form onSubmit={handelLoginForm} className="card-body">
                    <h2 className="text-center text-4xl font-mono">LogIn Here!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-stone-100">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-stone-100">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" type="submit" value="Login" />
                        </div>
                        <p className='text-center mb-4'>New Here? Please <Link to='/signUp' className='text-[#BB8506]'>SignUp</Link></p>
                    <GoogleSignIn></GoogleSignIn>
                    </form>

                   
                </div>
            </div>

        </div>



    );
};

export default Login;