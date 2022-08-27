import React, {PureComponent} from "react";
import "./ChartExample.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartExample =({title,data,dataKey,grid})=>{
    /*charts from https://recharts.org/en-US/   */
    return (
        <div className="chart">
            <h3 className="chartTitle">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4/1}>
                <LineChart data={data}>
                    {grid && <CartesianGrid strokeDasharray="3 3"/>}
                    <XAxis dataKey="name" stroke="red"/>
                    <YAxis/>
                    {/*Tooltip shows specific data when you hover on the graph*/}
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey={dataKey.uv} stroke="green" activeDot={{ r: 8 }}/>
                    <Line type="monotone" dataKey={dataKey.pv} stroke="red" activeDot={{ r: 8 }}/>
                    {/*<Line type="monotone" dataKey="pv" stroke="orange"/>*/}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ChartExample;