import React, {useState} from "react";
import {Link} from "react-router-dom";
import MandatSendForm from "../../components/userForms/MandatSendForm";
import MandatReceiveForm from "../../components/userForms/MandatReceiveForm";
import DepositForm from "../../components/userForms/DepositForm";
import WithdrawForm from "../../components/userForms/WithdrawForm";
import CreateCardForm from "../../components/userForms/CreateCardForm";
import ViewHistory from "../../components/Home/ViewHistory";

const HomeBody = ()=>{
    const [show, setShow] = useState(0)


    return (
        <div className="HomeBody">

            <div className="HomeBodyButtons">
                <button className="btn btn-primary col-2" onClick={() => setShow(0)}>Send Mandat</button>
                <button className="btn btn-primary col-2" onClick={() => setShow(1)}>Receive Mandat</button>
                <button className="btn btn-primary col-2" onClick={() => setShow(2)}>Deposit</button>
            </div>

            <div className="HomeBodyButtons">
                <button className="btn btn-primary col-2" onClick={() => setShow(3)}>Withdraw</button>
                <button className="btn btn-primary col-2" onClick={() => setShow(4)}>Create E-Dinar card</button>
                <button className="btn btn-success col-2" onClick={() => setShow(5)}>Show my history</button>
            </div>

            {show === 0 && <MandatSendForm/> }
            {show === 1 && <MandatReceiveForm/> }
            {show === 2 && <DepositForm/> }
            {show === 3 && <WithdrawForm/> }
            {show === 4 && <CreateCardForm/> }
            {show === 5 && <ViewHistory/> }

        </div>
    )
}

export default HomeBody;