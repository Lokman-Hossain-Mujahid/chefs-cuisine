import React from 'react';

import { Outlet } from "react-router-dom";
import MainNavbar from "../MainNavbar/MainNavbar";
import MainFooter from '../MainFooter/MainFooter';

const Home = () => {
    return (
        <div>
            <MainNavbar></MainNavbar>
            <Outlet></Outlet>
            <MainFooter></MainFooter>
        </div>
    );
};

export default Home;