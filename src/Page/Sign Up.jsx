import { Link } from "react-router-dom";

const SignUp = () => {
    const handelSignUpForm = event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password);


        event.target.reset();
    }
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="hero min-h-screen ">
                    <div className="hero-content w-auto flex-col lg:flex-row-reverse">

                        <div className="hero min-h-screen ">

                            <form onSubmit={handelSignUpForm} className="card-body">
                                <h2 className="text-center text-4xl font-mono">Sign Up Here!</h2>
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
                                    
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo Url</span>
                                    </label>
                                    <input type="url" name="photo" placeholder="Url" className="input input-bordered" required />
                                    
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn  text-[#BB8506] border-0 border-b-4 btn-outline" type="submit" value="SignUp" />
                                </div>
                                <p className='text-center  mb-4'>Already have an account? <Link to='/login' className='text-[#BB8506]'>Please Log In</Link></p>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;