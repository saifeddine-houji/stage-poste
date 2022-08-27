import React from "react";
import "./Dashboard.css";
import TopBar from "../../blocks/Dashboard/TopBar/TopBar";
import SideBar from "../../blocks/Dashboard/SideBar/SideBar";
import DashboardHome from "../../blocks/Dashboard/DashboardHome/DashboardHome";
import {Routes,Route} from "react-router-dom";

const Dashboard =()=>{
    return(
        /*change this div to router for routing*/
        <div>

            <TopBar />
            {/*DO NOT CHANGE THE CLASSNAME TO CONTAINER!!! I WILL KILL YOU IF YOU DO IT !!!
            container is a bootstrap reserved name, and it will ruin the current style*/}
            <div className="contain">
                <SideBar />

                <Routes>
                    <Route path='/' element={<DashboardHome />} />
                </Routes>


                {/*
                <Routes>
                    <Route path="/Dashboard" element={<DashboardHome/>}/>
                    <Route path="/Dashboard/Users" element={<DashboardUsers/>}/>
                </Routes>
                */}
            </div>

        </div>
    )
}

export default Dashboard;