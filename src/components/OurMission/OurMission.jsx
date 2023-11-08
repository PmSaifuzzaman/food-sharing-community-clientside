import { useEffect } from "react";
import mission from "../../assets/images/our mission.jpg"
import vission from "../../assets/images/vision.jpg"
import Aos from "aos";
import 'aos/dist/aos.css';


const OurMission = () => {


    useEffect(() => {
        Aos.init({
            duration: 800,
            offset: 100,
        })
    }, [])


    return (
        <div>
            <div className="hero lg:max-w-6xl mx-auto">
                <div className="hero-content flex-col gap-10 lg:flex-row" data-aos="slide-left">
                    <img src={mission} className="lg:max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: 'Playpen Sans, cursive' }}> Our <span className="text-red-400">Mission</span></h1>
                        <p className="py-6" style={{ fontFamily: 'Playpen Sans, cursive' }}>Our mission is to alleviate hunger and food insecurity in our community by rescuing surplus food and distributing it to those in need. We are committed to reducing food waste, nourishing the hungry, and building a more sustainable and equitable food system. Through the power of community, compassion, and collaboration, we strive to make a meaningful impact on the lives of individuals and families facing food challenges.</p>
                        <button className="btn btn-md bg-red-400 text-white rounded-full">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className="hero lg:max-w-6xl mx-auto">
                <div className="hero-content flex-col-reverse gap-10 lg:flex-row-reverse" data-aos="slide-right">
                    <img src={vission} className="lg:max-w-md rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold" style={{ fontFamily: 'Playpen Sans, cursive' }}>Our <span className="text-red-400">Vision</span></h1>
                        <p className="py-6" style={{ fontFamily: 'Playpen Sans, cursive' }}>Our vision is a world where no one goes to bed hungry, where food is abundant and accessible to all, and where communities come together to support one another. We aspire to create a future where food charity is no longer necessary because hunger and food insecurity have been eradicated. We envision a society where everyone has the opportunity to lead healthy and fulfilling lives, and where our organizations efforts contribute to a sustainable and just food system for all.</p>
                        <button className="btn btn-md bg-red-400 text-white rounded-full">Join Us</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurMission;