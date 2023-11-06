import Navbar from "../../components/Navbar/Navbar";
import FeaturedFood from "../FeaturedFood/FeaturedFood";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <FeaturedFood></FeaturedFood>
            
        </div>
    );
};

export default Home;