import "./SearchUserOps.css"
import React from "react";
import {useForm} from "react-hook-form";
import {useDispatch,useSelector} from "react-redux";
import {getOperationByClientId} from "../../../redux/actions/OperationActions";


const SearchUserOps=()=>{

    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();

    const submit=(data)=>{
        dispatch(getOperationByClientId(data));
    }

    const resultOperation = useSelector(state=>state.Operation.getOperationsByClientId);
    console.log(resultOperation)


    if(resultOperation.operations!=undefined){
        var operations = resultOperation.operations.PerformedOperations.map(elem=>{

            return <tr className="WidgetLgTr">
                <td className="WidgetLgProject">{elem._id}</td>
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
                                            <h4 className="mt-1 mb-5 pb-1">Put in the user ID to look up their history</h4>
                                        </div>

                                    </div>

                                    <form onSubmit={handleSubmit(submit)}>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example11">User ID</label>
                                            <input type="text" className="form-control"
                                                   placeholder="ID" {...register("idOperation",{required:true})} />
                                            {(errors.idOperation?.type) && <div class="alert alert-danger" role="alert">
                                                The user ID is required is required
                                            </div>}
                                        </div>



                                        <div className="d-flex justify-content-around pt-1 mb-5 pb-1">
                                            <button
                                                className="btn btn-primary btn-block fa-lg gradient-custom-1 mb-3"
                                                type="submit">Search
                                            </button>
                                            {/* {AuthState.error.data?.error} */}
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

                                    <div className="ViewHistoryExample mt-3 mb-3" style={{"width":"60%"}}>
                                        <div className="DashboardHomeWrapper">
                                            <div className="DashboardHomeItem">
                                                <div className="ViewHistoryitemsContainer">
                                                    <span className="ViewHistoryItemTitle">This client has performed a total of :</span>
                                                </div>

                                                <div className="ViewHistoryitemsContainer">
                                                    <span className="UserNumber">{resultOperation.counter} operations</span>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                </div>


                                <div className="WidgetLgExpenses">
                                    <div className="d-flex justify-content-center mt-3 mb-3">
                                        <span className="WidgetLgTitleExpenses">Operations :</span>
                                    </div>

                                    <table className="WidgetLgTable table">
                                        <thead>
                                        <tr className="WidgetLgTr table-active">
                                            <th className="WidgetLgTh">Operation id</th>
                                            <th className="WidgetLgTh">Type</th>
                                            <th className="WidgetLgTh">Date</th>
                                        </tr>
                                        </thead>

                                        <tbody>
                                        {operations}
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

export default SearchUserOps