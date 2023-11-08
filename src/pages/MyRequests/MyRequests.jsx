import { useContext, useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { authContext } from "../../providers/AuthProvider";
import MyRequestsCard from "./MyRequestsCard";
import Footer from "../../components/Footer/Footer";



const MyRequests = () => {
    const [myRequests, setMyRequests] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    const { user } = useContext(authContext);

    const userEmail = user ? user.email : '';
    console.log(userEmail);

    const url = `https://food-sharing-community-server.vercel.app/api/v1/user/foodRequests?requesterEmail=${userEmail}`;

    useEffect(() => {
        if (userEmail) {
            setIsLoading(true);
            fetch(url, { credentials: 'include' })
                .then(res => res.json())
                .then(data => {
                    setMyRequests(data);
                    setIsLoading(false);
                })
                .catch(error => {
                    console.error("Error:", error);
                    setIsLoading(false);
                });
        }
    }, [userEmail]);

    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-4xl font-bold text-center my-5" style={{ fontFamily: 'Playpen Sans, cursive' }}>My requests</h2>
            <div>
                {isLoading ? (
                    <progress className="progress w-56"></progress>
                ) : (
                    myRequests?.map(food => (
                        <MyRequestsCard key={food._id} food={food} myRequests={myRequests} setMyRequests={setMyRequests} />
                    ))
                )}
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyRequests;