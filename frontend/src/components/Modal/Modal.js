import React from "react"
import "./Modal.css"

const Modal = ({closeModal}) =>{
    return(
        <div className="modalBackground">
            <div className="modalContainers">
                <div className="titleCloseBtn">
                    <button onClick={()=>{closeModal(false)}}>X</button>
                </div>

                <div className="modalTitle">
                    <h1>Success !</h1>
                </div>
                <div className="modalBody">
                    <p>The operation has been performed successfully !</p>
                </div>
                <div className="modalFooter">
                    <button id="cancelBtn" onClick={()=>{closeModal(false)}}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal;