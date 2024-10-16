//import css file
import classes from './CartItem.module.css';
const CartItem = (props) => {
    return (
        <div className={classes['cart-item']}>
            <div className={classes.h}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.description}>
                <div className={classes.spans}>
                <span className={classes['span-price']}>{props.price.toFixed(2)}$</span>
                <span className={classes['span-amount']}>x {props.amount}</span>
                </div>
                <div className={classes.buttons}>
                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>
        </div>
        </div>
    );
}
export default CartItem;