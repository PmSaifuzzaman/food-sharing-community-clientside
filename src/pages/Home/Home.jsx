import Charity from "../../components/Charity/Charity";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import OurMission from "../../components/OurMission/OurMission";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Charity></Charity>
            <OurMission></OurMission>
            <Footer></Footer>
        </div>
    );
};

export default Home;