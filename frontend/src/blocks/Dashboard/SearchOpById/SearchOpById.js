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

/*
    if(resultOperation!=undefined)
    {
        var operationTable=()=>{
        return(
            /!*keep switching the value of type and building the table contents*!/
            /!*case 1 : mandat send*!/
            {this:resultOperation.operationType === "MANDAT_SEND" && <tbody>
                <tr>
                    <td>Operation type</td>
                    <td>{resultOperation.operationType}</td>
                </tr>
                <tr>
                    <td>Jacob</td>
                    <td>Thornton</td>
                </tr>
                <tr>
                    <td>Larry</td>
                    <td>the Bird</td>
                </tr>
                </tbody>}
        )
        }
    }
*/


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
                                                    <td>Operation Type</td>
                                                    <td>{resultOperation.operationType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}

                                                {/*type : receive mandat*/}
                                                {resultOperation.operationType === "MANDAT_RECEIVE" && <tbody>
                                                <tr>
                                                    <td>Operation Type</td>
                                                    <td>{resultOperation.operationType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}


                                                {/*type : deposit*/}
                                                {resultOperation.operationType === "ACCOUNT_DEPOSIT" && <tbody>
                                                <tr>
                                                    <td>Operation Type</td>
                                                    <td>{resultOperation.operationType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}


                                                {/*type : withdraw*/}
                                                {resultOperation.operationType === "ACCOUNT_WITHDRAW" && <tbody>
                                                <tr>
                                                    <td>Operation Type</td>
                                                    <td>{resultOperation.operationType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date performed</td>
                                                    <td>{resultOperation.createdAt.split('T')[0]}</td>
                                                </tr>

                                                </tbody>}


                                                {/*type : create card*/}
                                                {resultOperation.operationType === "CREATE_EDINAR_CARD" && <tbody>
                                                <tr>
                                                    <td>Operation Type</td>
                                                    <td>{resultOperation.operationType}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient Name</td>
                                                    <td>{resultOperation.operationInfo.recipientName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender Name</td>
                                                    <td>{resultOperation.operationInfo.senderName}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient CIN</td>
                                                    <td>{resultOperation.operationInfo.CINrecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender CIN</td>
                                                    <td>{resultOperation.operationInfo.CINsender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Amount</td>
                                                    <td>{resultOperation.operationInfo.amount}</td>
                                                </tr>
                                                <tr>
                                                    <td>Recipient address</td>
                                                    <td>{resultOperation.operationInfo.addressRecipient}</td>
                                                </tr>
                                                <tr>
                                                    <td>Sender address</td>
                                                    <td>{resultOperation.operationInfo.addressSender}</td>
                                                </tr>
                                                <tr>
                                                    <td>Date performed</td>
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