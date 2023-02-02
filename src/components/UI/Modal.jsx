import React from 'react'
import ReactDOM from 'react-dom'
import classes from "./Modal.module.css"

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.hideCartHandler} />
    )
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const Modal = (props) => {
    const portalElem = document.getElementById("overlay");
    return (
        <>
            {ReactDOM.createPortal(<Backdrop hideCartHandler={props.hideCartHandler} />, portalElem)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElem)}
        </>
    )
}

export default Modal    