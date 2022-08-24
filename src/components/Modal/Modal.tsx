import React from "react";
import ReactDOM from "react-dom";

import './modal.css';

interface IModal {
    countCorrect: number;
    countError: number;
    closeModal: ()=>void;
    retryGame: ()=>void;
}

const Modal = ({closeModal, retryGame, countCorrect, countError}:IModal) =>{

    const portal:HTMLElement = document.getElementById('portal') as HTMLElement;

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    return ReactDOM.createPortal(
        <div className="modal" onClick={closeModal}>
            <div className="modalInfo" onClick={handleClick}>
                <div className="statHeader">Statistic game</div>
                <div className="statistic">
                    <div className="counterModal">Count correct: {countCorrect}</div>
                    <div className="counterModal">Count error: {countError}</div>
                </div>
                <div className="modalBtns">
                    <button className="btnModal" onClick={()=>{closeModal()}}>Close</button>
                    <button className="btnModal" onClick={()=>{retryGame()}}>Retry</button>
                </div>
                
            </div>
        </div>,
        portal
    )
}

export default Modal;