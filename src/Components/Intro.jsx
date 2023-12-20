import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Intro = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 1000,
        cssEase: "linear"
    };

    return (
       

            <div className="mt-28">

                <Slider {...settings}>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    <div>
                        <img src="/T4.webp" alt="" />
                    </div>
                    

                </Slider>
            </div>

        
    );
};

export default Intro;