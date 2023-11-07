import { Outlet } from "react-router-dom";
import { ToastContainer, } from "react-toastify";




const MainLayout = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default MainLayout;