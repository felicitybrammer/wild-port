import React from 'react';
import ProjectCards from '../Projects/ProjectCards';

const Modal = (props, { onClose }) => {

    return (
        <div className="modal">
            <div className="">
                <h1 className="">{props.title} </h1>
                <h3>{props.subtitle}</h3>
                <p>{props.LongDesc}</p>
                <p>{props.role}</p>
                <p>{props.tech}</p>
                <button variant="primary" type="button" onClick={onClose}>
                    Close Modal
                </button>
            </div>
        </div>
    );

};

export default Modal;