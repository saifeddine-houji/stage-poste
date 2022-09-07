import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {OperationTypeByDate} from "../../../redux/actions/OperationActions";


const OpTypes =()=>{

    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();

    const submit=async(data)=>{
        dispatch(OperationTypeByDate(data));
    }

    const results = useSelector(state=> state.Operation.getOperationsByTypeDate)
    console.log(results)

    if(results!=undefined){
        var resultOperations = results.map(elem=>{
            return <tr className="WidgetLgTr">
                <td className="WidgetLgProject">{elem.id}</td>
                {elem.operationType === "MANDAT_SEND" && <td className="WidgetLgAmount">Mandat : Sent</td>}
                {elem.operationType === "MANDAT_RECEIVE" && <td className="WidgetLgAmount">Mandat : Received</td>}
                {elem.operationType === "ACCOUNT_DEPOSIT" && <td className="WidgetLgAmount">Deposit</td>}
                {elem.operationType === "ACCOUNT_WITHDRAW" && <td className="WidgetLgAmount">Withdrawal</td>}
                {elem.operationType === "CREATE_EDINAR_CARD" && <td className="WidgetLgAmount">E-dinar Card creation</td>}
                <td className="WidgetLgDate">{elem.createdAt.split('T')[0]}</td>
            </tr>


        })
    }



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
                                            <h4 className="mt-1 mb-5 pb-1">Select the type, beginning and end dates</h4>
                                        </div>

                                    </div>

                                    <form onSubmit={handleSubmit(submit)}>

                                        <div className="form-outline">
                                            <label className="form-label" htmlFor="form2Example11">Operation Type</label>

                                            <select className="form-select" {...register("type")}>
                                                <option value="MANDAT_SEND">Send mandat</option>
                                                <option value="MANDAT_RECEIVE">Receive mandat</option>
                                                <option value="ACCOUNT_DEPOSIT">Deposit</option>
                                                <option value="ACCOUNT_WITHDRAW">Withdraw</option>
                                                <option value="CREATE_EDINAR_CARD">Create E-dinar card</option>
                                            </select>

                                        </div>

                                        <div className="formUnit mb-4">
                                            <div className="form-outline col-5 mt-5">
                                                <label className="form-label" htmlFor="form3Example90">Start
                                                    date</label>
                                                <input type="date"
                                                       className="form-control form-control-lg" {...register("start", { required: true })} />
                                                {errors.start?.type && <div class="alert alert-danger" role="alert">
                                                    Start date is required
                                                </div>}
                                            </div>

                                            <div className="form-outline col-5 mt-5">
                                                <label className="form-label" htmlFor="form3Example90">End
                                                    date</label>
                                                <input type="date"
                                                       className="form-control form-control-lg" {...register("end", { required: true })} />
                                                {errors.end?.type && <div class="alert alert-danger" role="alert">
                                                    End date is required
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


                    <div className="row d-flex justify-content-center align-items-center h-100 mt-5">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">

                                    <table className="WidgetLgTable table">
                                        <thead>
                                        <tr className="WidgetLgTr table-active">
                                            <th className="WidgetLgTh">Operation id</th>
                                            <th className="WidgetLgTh">Type</th>
                                            <th className="WidgetLgTh">Date</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {resultOperations}
                                        </tbody>

                                    </table>

                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
        </div>
    )
}

export default OpTypes;