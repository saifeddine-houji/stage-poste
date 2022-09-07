import "./SearchOpById.css"
import {Link} from "react-router-dom";
import React from "react";
import {useForm} from "react-hook-form";
import {useEffect, useState} from "react";
import {getOperationByOpId} from "../../../redux/actions/OperationActions";
import {useDispatch,useSelector} from "react-redux";


const SearchOpById =()=>{

    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();

    const submit=(data)=>{
        dispatch(getOperationByOpId(data));
    }

    const resultOperation = useSelector(state=>state.Operation.getOperationByOpId);
console.log(resultOperation)


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
                                            <h4 className="mt-1 mb-5 pb-1">Put in the operation ID to look up its details</h4>
                                        </div>

                                    </div>

                                    <form onSubmit={handleSubmit(submit)}>

                                        <div className="form-outline mb-4">
                                            <label className="form-label" htmlFor="form2Example11">Operation ID</label>
                                            <input type="text" className="form-control"
                                                   placeholder="ID" {...register("idOperation",{required:true})} />
                                            {(errors.idOperation?.type) && <div class="alert alert-danger" role="alert">
                                                The operation ID is required is required
                                            </div>}

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

                                            <table className="table">
                                                <thead className="thead-light">
                                                <tr>
                                                    <th scope="col">Field</th>
                                                    <th scope="col">Contents</th>
                                                </tr>
                                                </thead>
                                                {/*use conditional tests here to differentiate between each type and it's variables*/}

                                                {/*type : send mandat*/}
                                                {resultOperation.operationType === "MANDAT_SEND" && <tbody>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Operation Type</td>
                                                    <td>Sending mandat</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}

                                                {/*type : receive mandat*/}
                                                {resultOperation.operationType === "MANDAT_RECEIVE" && <tbody>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Operation Type</td>
                                                    <td>Mandat reception</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">CIN</td>
                                                    <td>{resultOperation.operationInfo.CIN}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender operation ID</td>
                                                    <td>{resultOperation.operationInfo.idOperation}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}


                                                {/*type : deposit*/}
                                                {resultOperation.operationType === "ACCOUNT_DEPOSIT" && <tbody>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Operation Type</td>
                                                    <td>Deposit</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Full Name</td>
                                                    <td>{resultOperation.operationInfo.fullName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">CIN</td>
                                                    <td>{resultOperation.operationInfo.CIN}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">RIB</td>
                                                    <td>{resultOperation.operationInfo.rib}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}


                                                {/*type : withdraw*/}
                                                {resultOperation.operationType === "ACCOUNT_WITHDRAW" && <tbody>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Operation Type</td>
                                                    <td>Withdrawal</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Full Name</td>
                                                    <td>{resultOperation.operationInfo.fullName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">CIN</td>
                                                    <td>{resultOperation.operationInfo.CIN}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">RIB</td>
                                                    <td>{resultOperation.operationInfo.rib}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}

                                                {/*type : create card*/}
                                                {resultOperation.operationType === "CREATE_EDINAR_CARD" && <tbody>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Operation Type</td>
                                                    <td>Create E-dinar Card</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Full Name</td>
                                                    <td>{resultOperation.operationInfo.fullName}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">CIN</td>
                                                    <td>{resultOperation.operationInfo.CIN}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Address</td>
                                                    <td>{resultOperation.operationInfo.address}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Email</td>
                                                    <td>{resultOperation.operationInfo.email}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Occupation</td>
                                                    <td>{resultOperation.operationInfo.occupation}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Phone</td>
                                                    <td>{resultOperation.operationInfo.phone}</td>
                                                </tr>
                                                <tr>
                                                    <td className="WidgetLgUserColumn">Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}

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

export default SearchOpById