import React, {useEffect} from "react";
import Modal from"../Modal/Modal";
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";

import {createOperationAction} from "../../redux/actions/OperationActions";

const CreateCardForm=()=>{
    const [useModal,setUseModal]=useState(false);
    const {register, handleSubmit,formState:{errors}}=useForm();
    const dispatch = useDispatch();
    const AuthState = useSelector(state => state.Auth);

    /*const user = AuthState.user._id;*/
   // const navigate=useNavigate();

    const submit =(data)=>{
        var newData={
            /*userId:user,*/
            operationType: "CREATE_EDINAR_CARD",
            operationInfo: {
                fullName:data.fullName,
                CIN:data.CIN,
                address:data.address,
                email:data.email,
                phone:data.phone,
                occupation:data.occupation
            }
        }

        dispatch(createOperationAction(newData))
    }



    //const [useModal,setUseModal]=useState(false);

    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-6">
                    <div>

                        <form onSubmit={handleSubmit(submit)}>
                            <div className="homepage-titles">
                                <h1>Create E-Dinar card</h1>
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
                                    <label className="form-label" htmlFor="form2Example11">Address</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Address" {...register("address",{required:true})}/>
                                    {(errors.address?.type) && <div class="alert alert-danger" role="alert">
                                        address is required
                                    </div>}
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Email</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Email" {...register("email", { required: true, pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$' })}/>
                                    {errors.email?.type === "required" && <div class="alert alert-danger" role="alert">
                                        email is required
                                    </div>}
                                    {errors.email?.type === "pattern" && <div class="alert alert-danger" role="alert">
                                        email format is invalid
                                    </div>}
                                </div>
                            </div>

                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Phone</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Phone" {...register("phone", { required: true, minLength: 8, maxLength:8 })}/>
                                    {errors.phone?.type === "required" && <div className="alert alert-danger" role="alert">
                                        phone number is required
                                    </div>}
                                    {errors.phone?.type === "minLength" && <div className="alert alert-danger" role="alert">
                                        the phone number must have 8 digits
                                    </div>}
                                    {errors.phone?.type === "maxLength" && <div className="alert alert-danger" role="alert">
                                        the phone number must have 8 digits
                                    </div>}
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Occupation</label>
                                    <input  type="text" className="form-control"
                                            placeholder="Occupation" {...register("occupation",{required:true})}/>
                                    {(errors.occupation?.type) && <div class="alert alert-danger" role="alert">
                                        occupation is required
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

export default CreateCardForm;