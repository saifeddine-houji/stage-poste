import React from "react";
import "./DashboardHome.css";
import CardsExample from "../../../components/Dashboard/cardsExample/CardsExample";
import ChartExample from "../../../components/Dashboard/chartExample/ChartExample";
import {ChartDataEXample} from "../../../ChartDataTest";
import WidgetSmExample from "../../../components/Dashboard/widgetSmExample/WidgetSmExample";
import WidgetLgExample from "../../../components/Dashboard/widgetLgExample/WidgetLgExample";

const DashboardHome =()=>{
    return(
        /*this is temporary, used to understand how to devide, later use components here*/
        /*icons from https://mui.com/material-ui/material-icons/   */
        /*tables from https://mui.com/material-ui/react-table/#data-table  */
        /*color picker https://imagecolorpicker.com/en  */
        <div className="DashboardHome">
            <CardsExample/>
            {/*write grid in the parameters if you want chart with a grid, otherwise don't*/}
            <ChartExample title="Donation analysis" data={ChartDataEXample} dataKey={{uv:"uv",pv:"pv"}} grid/>

            <div className="HomeWidgets">
                <WidgetSmExample/>
                <WidgetLgExample/>
            </div>
        </div>
    )
}

export default DashboardHome;