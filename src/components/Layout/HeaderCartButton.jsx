//import Icon Cart 
import CartIcon from "../Cart/CartIcon";
//imort css file
import classes from './HeaderCartButton.module.css';
import { useSelector } from "react-redux";
const HeaderCartButton = (props) => {
    const myCartItems = useSelector(state => state.items);
    const numbersOfItems = myCartItems.length;
    return (
        <button className={classes.button} onClick = {props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numbersOfItems}</span>
        </button>
    )
}
export default HeaderCartButton;