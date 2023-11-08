import { useEffect } from "react";
import bannerImg from "../../assets/images/banner 2.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';

const Banner = () => {

    useEffect(() => {
      Aos.init(); 
    }, [])

    return (
        <div className="hero" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={bannerImg} className="lg:max-w-lg" data-aos="fade-left" />
                <div data-aos="fade-right">
                    <h1 className="text-5xl font-bold" style={{ fontFamily: 'Playpen Sans, cursive' }}>We accept <span className="text-red-400">food</span> sharing</h1>
                    <p className="py-6 text-xl" style={{ fontFamily: 'Playpen Sans, cursive' }}>We are looking for your Surplus. Food is the ingredient that binds us all, and sharing it is a celebration of our shared humanity.Food tastes better when shared with friends.</p>
                    <p className="pb-5 text-2xl font-medium" style={{ fontFamily: 'Playpen Sans, cursive' }}>Share <span className="text-red-400 ">Food</span> || Share <span className="text-red-400">Joy</span></p>
                    <button className="btn btn-outline border border-red-400 text-red-400">Contact Us</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;