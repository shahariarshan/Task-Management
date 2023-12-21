import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const Intro = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
       

          <div>
              <div className="">
                <h2 className="text-center text-2xl lg:text-4xl mb-5 mt-5">Your Ultimate Task Management Solution</h2>
                <Slider {...settings}>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    <div>
                        <img src="/T7.png" alt="" />
                    </div>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    

                </Slider>
            </div>
                
                <Link to="/login" className='btn btn-md mt-6 btn-warning mx-auto flex justify-center items-center'  >Let’s Explore</Link>
          </div>

        
    );
};

export default Intro;