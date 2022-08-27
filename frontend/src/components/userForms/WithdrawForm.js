import React from "react";
import {useState} from "react";
import Modal from"../Modal/Modal"

const WithdrawForm =()=>{
    const [useModal,setUseModal]=useState(false);
    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-6">
                    <div>

                        <form>
                            <div className="homepage-titles">
                                <h1>Withdraw from account</h1>
                            </div>

                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Full name</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="Full name"/>
                                </div>

                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">CIN</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="CIN"/>
                                </div>
                            </div>



                            <div className="formUnit">
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Account number</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="Account number"/>
                                </div>
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Amount</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="Amount"/>
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

export default WithdrawForm;