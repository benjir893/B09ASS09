import { Outlet } from "react-router-dom";
import Header from "../Pages/Header";
import Navbar from "../Pages/Navbar";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
        <div className="mx-10 my-5">
            <Header></Header>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;