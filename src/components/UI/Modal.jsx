import ReactDom from 'react-dom';
//import css file
import classes from './Modal.module.css';
const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onCloseCart}></div>
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
    return (
        <div>
        {ReactDom.createPortal(<Backdrop onCloseCart = {props.onCloseCart}/> , document.getElementById('overlays'))}
        {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay> , document.getElementById('overlays'))}
        </div>
    );
}
export default Modal;