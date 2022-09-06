import React from "react";
import {useState} from "react";
import Modal from"../Modal/Modal";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createOperationAction} from "../../redux/actions/OperationActions";


const MandatSendForm=()=>{

    const [useModal,setUseModal]=useState(false);
    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth);

    const submit =(data)=>{
        var newData={
            /*userId:user,*/
            operationType: "MANDAT_SEND",
            operationInfo: {
                senderName:data.senderName,
                CINsender:data.CINsender,
                addressSender:data.addressSender,
                amount:data.amount,
                recipientName:data.recipientName,
                CINrecipient:data.CINrecipient,
                addressRecipient:data.addressRecipient,
            }
        }

        dispatch(createOperationAction(newData))
    }

    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-6">
                    <div>

                        <form onSubmit={handleSubmit(submit)}>
                            <div className="homepage-titles">
                                <h1>Send Mandat</h1>
                                <h3>Sender information</h3>
                            </div>

                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Full name</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Full name" {...register("senderName",{required:true})}/>
                                    {(errors.senderName?.type) && <div class="alert alert-danger" role="alert">
                                        Sender full name is required
                                    </div>}
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">CIN</label>
                                    <input  type="number" className="form-control"
                                                placeholder="CIN" {...register("CINsender",{required:true, minLength: 8, maxLength:8})}/>
                                    {errors.CINsender?.type === "required" && <div className="alert alert-danger" role="alert">
                                        CIN is required
                                    </div>}
                                    {errors.CINsender?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                    {errors.CINsender?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                </div>
                            </div>



                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Address</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Address" {...register("addressSender",{required:true})}/>
                                    {(errors.addressSender?.type) && <div class="alert alert-danger" role="alert">
                                        Sender address is required
                                    </div>}
                                </div>
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Amount</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Amount" {...register("amount",{required:true})}/>
                                    {errors.amount?.type === "required" && <div className="alert alert-danger" role="alert">
                                        the Amount is required
                                    </div>}
                                </div>
                            </div>


                            <div className="homepage-titles">
                                <h3>Recipient information</h3>
                            </div>


                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Full name</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Full name" {...register("recipientName",{required:true})}/>
                                    {(errors.recipientName?.type) && <div class="alert alert-danger" role="alert">
                                        Recipient full name is required
                                    </div>}
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">CIN</label>
                                    <input  type="number" className="form-control"
                                            placeholder="CIN" {...register("CINrecipient",{required:true, minLength: 8, maxLength:8})}/>
                                    {errors.CINrecipient?.type === "required" && <div className="alert alert-danger" role="alert">
                                        CIN is required
                                    </div>}
                                    {errors.CINrecipient?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                    {errors.CINrecipient?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                </div>
                            </div>

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11">Address</label>
                                <input type="text" className="form-control"
                                       placeholder="Address" {...register("addressRecipient",{required:true})}/>
                                {(errors.addressRecipient?.type) && <div class="alert alert-danger" role="alert">
                                    Recipient address is required
                                </div>}
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-center align-items-center">
                                <button onClick={()=>{setUseModal(true)}}
                                        className="btn btn-info btn-block col-3"
                                        type="submit">Confirm
                                </button>

                                {useModal && <Modal closeModal={setUseModal}/>}

                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MandatSendForm
