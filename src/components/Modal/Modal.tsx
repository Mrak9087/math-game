import ReactDOM from "react-dom";

import './modal.css';

interface IModal {
    closeModal: ()=>void;
}

const Modal = ({closeModal}:IModal) =>{

    const portal:HTMLElement = document.getElementById('portal') as HTMLElement;

    return ReactDOM.createPortal(
        <div className="modal">
            <div className="modalInfo">
                <button className="btnRetry" onClick={()=>{closeModal()}}>Retry</button>
            </div>
        </div>,
        portal
    )
}

export default Modal;