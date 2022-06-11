import React from 'react';
import ResponsiveNavbar from "../navbar/navbar/ResponsiveNavbar";
import {Outlet} from "react-router-dom";
import Footer from "../footer/Footer";

const MainPage = () => {
    return (
        <>
            <ResponsiveNavbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default MainPage;