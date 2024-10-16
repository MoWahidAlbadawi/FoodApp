import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store';
//import css file
import classes from './MealItem.module.css'
//import Meal form component
import MealItemForm from './MealItemForm';
const MealItem = (props) => {
    const dispatch = useDispatch();
    function addItemToContext(amount){
        dispatch(cartActions.addItem({
            id : props.id,
            name :props.name,
            price :props.price,
            amount : amount,
        }));
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{props.price.toFixed(2)}$</div>
            </div>
            <div>
                <MealItemForm onSendAmount={addItemToContext}/>
            </div>
        </li>
    )
}
export default MealItem;