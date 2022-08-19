import React from "react";
import ReactDOM from "react-dom";

import './modal.css';

interface IModal {
    closeModal: ()=>void;
    retryGame: ()=>void;
}

const Modal = ({closeModal, retryGame}:IModal) =>{

    const portal:HTMLElement = document.getElementById('portal') as HTMLElement;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={closeModal}>
            <div className="modalInfo" onClick={handleClick}>
                <button className="btnRetry" onClick={()=>{retryGame()}}>Retry</button>
            </div>
        </div>,
        portal
    )
}

export default Modal;