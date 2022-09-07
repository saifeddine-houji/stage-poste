import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {OperationNumbersByDate} from "../../../redux/actions/OperationActions";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const OpNumbers =()=> {

    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();

    const submit=async (data)=>{
        dispatch(OperationNumbersByDate(data))
    }

    const results = useSelector(state=>state.Operation.getOperationNumbersByDate);

    const data = [
        {
            "name": "Mandats Sent",
            "Value": results.MandatSent
        },
        {
            "name": "Mandats received",
            "Value": results.MandatReceived
        },
        {
            "name": "Deposits",
            "Value": results.deposited
        },
        {
            "name": "Withdrawals",
            "Value": results.withdrawn
        },
        {
            "name": "Cards Created",
            "Value": results.edinarCards
        },
        {
            "name": "Total operations",
            "Value": results.total
        },

    ]


    return(
        <div className="DashboardHome">
            <div className="container mt-5">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">

                                <div className="card-body p-md-5 mx-md-4">

                                    <div className="LogoTitle">

                                        <div className="homepage-titles">
                                            <h4 className="mt-1 mb-5 pb-1">Select the beginning and end dates</h4>
                                        </div>
                                    </div>

                                    <form onSubmit={handleSubmit(submit)}>

                                        <div className="formUnit mb-4">
                                            <div className="form-outline col-5 mt-5">
                                                <label className="form-label" htmlFor="form3Example90">Start
                                                    date</label>
                                                <input type="date"
                                                       className="form-control form-control-lg" {...register("start", { required: true })} />
                                                {errors.start?.type && <div class="alert alert-danger" role="alert">
                                                    start date is required
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mt-5">
                                                <label className="form-label" htmlFor="form3Example90">End
                                                    date</label>
                                                <input type="date"
                                                       className="form-control form-control-lg" {...register("end", { required: true })} />
                                                {errors.end?.type && <div class="alert alert-danger" role="alert">
                                                    end date is required
                                                </div>}
                                            </div>

                                        </div>

                                        <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                            <button
                                                className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                type="submit">Search
                                            </button>

                                        </div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    {results!=undefined && <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <BarChart width={730} height={450} data={data}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="name" />
                                        <YAxis />
                                        <Tooltip />
                                        <Legend />
                                        <Bar dataKey="Value" fill="#E75DE1" />

                                    </BarChart>

                                </div>
                            </div>
                        </div>
                    </div>}


                </div>
            </div>
        </div>
    )
}

export default OpNumbers;