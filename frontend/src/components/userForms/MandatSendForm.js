import React from "react";

const MandatSendForm=()=>{
    return(
        <div className="container mt-5">
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-lg-6">
                    <div>

                        <form>
                            <div className="homepage-titles">
                                <h1>Send Mandat</h1>
                                <h3>Sender information</h3>
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
                                    <label className="form-label" htmlFor="form2Example11">Adress</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="Adress"/>
                                </div>
                                <div className="form-outline col-5 mb-4">
                                    <label className="form-label" htmlFor="form2Example11">Amount</label>
                                    <input  type="text" id="form2Example11" className="form-control"
                                            placeholder="Amount"/>
                                </div>
                            </div>


                            <div className="homepage-titles">
                                <h3>Recipient information</h3>
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

                            <div className="form-outline mb-4">
                                <label className="form-label" htmlFor="form2Example11">Adress</label>
                                <input type="text" id="form2Example11" className="form-control"
                                       placeholder="Adress"/>
                            </div>

                            <div className="text-center pt-1 mb-5 pb-1 d-flex justify-content-center align-items-center">
                                <button
                                        className="btn btn-info btn-block col-3"
                                        type="submit">Confirm
                                </button>



                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MandatSendForm
