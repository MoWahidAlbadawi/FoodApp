 import { useState} from 'react';
//import CartItem component
import CartItem from './CartItem';
//import css file
import classes from './Cart.module.css'
//import UI Modal
import Modal from '../UI/Modal';
import Checkout from './Checkout';
import { cartActions } from '../../store';
import { useSelector , useDispatch } from 'react-redux';
import databases from '../../lib/appwrite';
import { ID } from 'appwrite';
const Cart = (props) => {
    const [isSubmitting , setIsSubmitting] = useState(false);
    const [didSubmitting , setDidSubmitting] = useState(false);
    const [isOrder , setIsOrder] = useState(false);
    const dispatch = useDispatch();
    const myItems = useSelector(state => state.items);
    const myTotalAmount = useSelector(state => state.totalAmount);
    const totalAmount = myTotalAmount.toFixed(2);
    const hasItems = myItems.length > 0;
    const removeItemHandler = (id) => {
        dispatch(cartActions.removeItem(id));
    }
    const AddItemHandler = (item) => {
        dispatch(cartActions.addItem({...item , amount : 1}));
    }
        const cartItems = (<ul>
        {myItems.map((item) => (
        // eslint-disable-next-line react/jsx-key
        <CartItem name={item.name}
        price = {item.price}
        amount = {item.amount}
        onRemove = {removeItemHandler.bind(null,item.id)}
        onAdd = {AddItemHandler.bind(null , item)}/>))}
        </ul>);
        function orderedHandler () {
            setIsOrder(true);
        }
        //this for send itmes customer to appwrite database
        const itemsToDataBase = myItems.map((item) => JSON.stringify(item));
        async function sendDataFetching (infoOrder) {
            setIsSubmitting(true);
            try {
            const response = await databases.createDocument(
                '67345e81001536702983',
                '67391c19003bcde38115',
                ID.unique(),
                {
                    name : infoOrder.name,
                    city : infoOrder.city,
                    street : infoOrder.street, 
                    postalCode : JSON.stringify(infoOrder.postalCode),
                    items : itemsToDataBase,
                    }
            )
        }
        catch (error){
            console.log(error.message);
        }
        setIsSubmitting(false);
        setDidSubmitting(true);
            dispatch(cartActions.clearCart());
        }
        let content = (<Modal className={classes['cart-items']} onCloseCart={props.onCloseCart}>
            <div className={classes.items}>
               {cartItems}
            </div>
               <div className={classes.total}>
                   <span>Total Amount</span>
                   <span>{totalAmount}$</span>
               </div>
               {isOrder && <Checkout onClose = {props.onCloseCart}  onSend={sendDataFetching}/>}
               {!isOrder && <div className={classes.actions}> 
                   {hasItems && <button className={classes.button} onClick={orderedHandler}>order</button>}
               </div>}
           </Modal>);
           if(isSubmitting) 
            content = <Modal>
                <div className={classes.isSubmitting}>
                    <p>submitting your data...</p>
                </div>
            </Modal>
           if(didSubmitting)
            content = <Modal>
                <div className={classes.didSubmitting}>
                <p>The request has been sent. The restaurant will review the request and send it as soon as possible.</p>
            <button onClick={props.onCloseCart}>Close</button>
            </div>
            </Modal>
           return ( 
        <div>
            {content}
        </div>
    )
}
export default Cart;