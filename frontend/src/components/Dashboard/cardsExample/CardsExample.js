import React from "react";
import "./CardsExample.css";
import {ArrowUpward,ArrowDownward} from "@mui/icons-material";

const CardsExample = () =>{
    return (
        <div className="HomeComponentExample">
            <div className="DashboardHomeWrapper">
                <div className="DashboardHomeItem">
                    <span className="ItemTitle">users number</span>

                    <div className="itemsContainer">
                        <span className="UserNumber">1546 user</span>
                        <span className="UserTrend">126 <ArrowUpward className="ArrowIcon"/></span>
                    </div>

                </div>
            </div>

            <div className="DashboardHomeWrapper">
                <div className="DashboardHomeItem">
                    <span className="ItemTitle">projects number</span>

                    <div className="itemsContainer">
                        <span className="UserNumber">56 project</span>
                        <span className="UserTrend">3 <ArrowUpward className="ArrowIcon"/></span>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CardsExample;