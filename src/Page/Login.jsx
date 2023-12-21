import { Link } from "react-router-dom";


const Login = () => {
    const handelLoginForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);


        event.target.reset();
    }

    return (

        //     {/* <Helmet>
        //     <title>
        //         Pooling & Survey | Login
        //     </title>
        // </Helmet> */}


        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
             
            <div className="hero-overlay bg-opacity-60"></div>
            
            <div className="hero-content text-center text-neutral-content">
                 
                <div className="hero min-h-screen ">
                
                    <form onSubmit={handelLoginForm} className="card-body">
                    <h2 className="text-center text-4xl font-mono">LogIn Here!</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" type="submit" value="Login" />
                        </div>
                        <p className='text-center mb-4'>New Here? Please <Link to='/signUp' className='text-[#BB8506]'>SignUp</Link></p>
                    </form>

                   
                </div>
            </div>

        </div>



    );
};

export default Login;