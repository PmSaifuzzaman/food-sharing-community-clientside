import Charity from "../../components/Charity/Charity";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            <Charity></Charity>
            <Footer></Footer>
        </div>
    );
};

export default Home;