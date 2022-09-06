import React from "react";
import {useState} from "react";
import Modal from"../Modal/Modal";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {createOperationAction} from "../../redux/actions/OperationActions";


const DepositForm =()=>{

    const [useModal,setUseModal]=useState(false);
    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth);

    const submit =(data)=>{
        var newData={

            operationType: "ACCOUNT_DEPOSIT",
            operationInfo: {
                fullName:data.fullName,
                CIN:data.CIN,
                rib:data.rib,
                amount:data.amount,
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
                                <h1>Deposit into account</h1>
                            </div>

                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Full name</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Full name" {...register("fullName",{required:true})}/>
                                    {(errors.fullName?.type) && <div class="alert alert-danger" role="alert">
                                        full name is required
                                    </div>}
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">CIN</label>
                                    <input  type="number" className="form-control"
                                            placeholder="CIN" {...register("CIN",{required:true, minLength: 8, maxLength:8})}/>
                                    {errors.CIN?.type === "required" && <div className="alert alert-danger" role="alert">
                                        CIN is required
                                    </div>}
                                    {errors.CIN?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                    {errors.CIN?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                        CIN must have 8 digits
                                    </div>}
                                </div>
                            </div>



                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Account number</label>
                                    <input  type="number" className="form-control"
                                            placeholder="RIB" {...register("rib",{required:true, minLength: 20, maxLength:20})}/>
                                    {errors.rib?.type === "required" && <div className="alert alert-danger" role="alert">
                                        RIB is required
                                    </div>}
                                    {errors.rib?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                        RIB must have 20 digits
                                    </div>}
                                    {errors.rib?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                        RIB must have 20 digits
                                    </div>}
                                </div>
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Amount (in dinars)</label>
                                    <input  type="number" className="form-control"
                                            placeholder="Amount" {...register("amount",{required:true})}/>
                                    {errors.amount?.type === "required" && <div className="alert alert-danger" role="alert">
                                        the Amount is required
                                    </div>}
                                </div>
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

export default DepositForm;