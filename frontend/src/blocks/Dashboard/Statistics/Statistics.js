import "./Statistics.css"
import React, {useState} from "react";
import OpNumbers from "../../../components/Dashboard/Statistics/OpNumbers";
import OpTypes from "../../../components/Dashboard/Statistics/OpTypes";



const Statistics=()=>{

    const [show, setShow] = useState(0)

    return(
        <div className="DashboardHome">
            <div className="homepage-titles">
                <h1>Welcome to the statistics overview !</h1>
                <h2>Choose your operation</h2>
            </div>

            <div className="HomeBody">

                <div className="HomeBodyButtons">
                    <button className="btn btn-primary col-2" onClick={() => setShow(1)}>Total numbers of operations per date</button>
                    <button className="btn btn-primary col-2" onClick={() => setShow(2)}>One type of operation per date</button>
                </div>

                {show === 1 && <OpNumbers/>}
                {show === 2 && <OpTypes/>}

            </div>


        </div>
    )
}

export default Statistics;