import "./ViewHistory.css";
import {ArrowUpward,ArrowDownward} from "@mui/icons-material";
import React from "react";
import {useEffect, useState} from "react";
import {getOperationsPerUser} from "../../redux/actions/OperationActions";
import {useDispatch,useSelector} from "react-redux";

const ViewHistory =()=>{

    const dispatch = useDispatch();
    const getOperationsUser = useSelector(state=>state.Operation.getOperationsUser)
    useEffect(()=>{
        dispatch(getOperationsPerUser())
    },[])


    if(getOperationsUser.operations!=undefined){
        var operations = getOperationsUser.operations.PerformedOperations.map(elem=>{

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
        <div>
            {/*card for total number of operations*/}

            <div className="ViewHistoryExample">
                <div className="DashboardHomeWrapper">
                    <div className="DashboardHomeItem">
                        <div className="ViewHistoryitemsContainer">
                            <span className="ViewHistoryItemTitle">Your total number of performed operations :</span>
                        </div>

                        <div className="ViewHistoryitemsContainer">
                            <span className="UserNumber">{getOperationsUser.counter} operations</span>
                        </div>

                    </div>
                </div>

            </div>

            <div className="WidgetLgExpenses">
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <span className="WidgetLgTitleExpenses">Older operations</span>
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
    )
}

export default ViewHistory;