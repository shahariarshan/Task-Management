
import { FaWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";


const Contact = () => {
    return (
        <div className='mt-10'>
        
         <h1 className='text-center mx-auto text-5xl font-serif' >Contact  </h1>
         <div className="divider divider-warning"></div>
         <div className="flex justify-evenly mt-5 mb-5" name='Contact Me'>
            <div className='space-y-3 mt-12'>
        <div className='flex'>
        <FaWhatsapp className='text-2xl mr-3'></FaWhatsapp><span>+01735519474</span>
        </div>
        <div className='flex'>
        <IoLogoLinkedin className='text-2xl mr-3'></IoLogoLinkedin> <a className='mr-2' href="https://www.linkedin.com/in/shahariarmohammad/">shahariarmohammad</a>
        </div>
        <div className='flex'>
        <FaInstagram className='text-2xl mr-3'></FaInstagram> <a className='mr-2' href="https://www.instagram.com/shahariar__69/?igshid=MzMyNGUyNmU2YQ%3D%3D">shahariar__69</a>
        </div>
        <div className='flex'>
        <MdOutlineAlternateEmail className='text-2xl mr-3'></MdOutlineAlternateEmail> <a className='mr-2' href="mailto:shahariarmohammadhassan@gmail.com">Shahariar Mohammad Hassan</a>
        </div>
            </div>
            <div >
                <form  className='space-y-4' >
                    <div>
                    <label>Name</label>
                    <input type="text" placeholder="Type Name" name="user_name" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <label>Email</label>
                    <input type="email" name="user_email" placeholder="Type email" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div>
                    <label>Message</label>
                    <textarea name="message" className="input input-bordered h-30 w-full max-w-xs" placeholder=""></textarea>
                    </div>
                    <input className='btn btn-md btn-warning mx-auto flex justify-center items-center' type="submit" value="Send" />
                </form>
            </div>
        </div>
       </div>
    );
};

export default Contact;