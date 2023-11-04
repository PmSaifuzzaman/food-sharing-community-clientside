import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png"
import { ToastContainer, toast } from "react-toastify";
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";
import { getAuth } from "firebase/auth";
import userDefaultPhoto from "../../assets/logo/user.png"


const Navbar = () => {


    // Access Context api
    const { logOut, user } = useContext(authContext);

    const email = user ? user.email : null;
    console.log(email)

    const auth = getAuth()

    // Log out messege
    const handleLogOut = () => {
        logOut(auth)
            .then(() => {
                toast('Log out Successfully')
            })
            .catch(() => {
                toast('Cannot log out')
            })
    }




    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/allFoods"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Available Foods
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/addFood"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Add Food
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-sky-400 underline font-medium" : ""
                                }>
                                Manage My Foods
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-sky-400 underline font-medium" : ""
                                }>
                                My Food Request
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link><img className="h-24" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/allFoods"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Available Foods
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/addFood"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Add Food
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-400 underline font-medium" : ""
                            }>
                            Manage My Foods
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-sky-400 underline font-medium" : ""
                            }>
                            My Food Request
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user && <p className="font-semibold hidden md:block">{user?.email}</p>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div >
                        {
                            user ? <div>
                                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                            </div>
                                :
                                <img src={userDefaultPhoto} />
                        }
                    </div>
                </label>
                {
                    user ? <button onClick={handleLogOut} className="btn">LogOut</button>
                        :
                        <Link className="btn" to={"/login"}>Login</Link>
                }
                <ToastContainer></ToastContainer>
            </div>
        </div>
    );
};

export default Navbar;