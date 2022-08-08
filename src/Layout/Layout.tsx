import React from "react";
import { Outlet } from "react-router-dom";
import Card from "../components/Card";
import Header from "../components/Header";

const Layout = () => {
    return (
        <div className='App'>
            <Header />
            <div>
                <Card />
                <Outlet />
            </div>
        </div>
    )
}

export default Layout;