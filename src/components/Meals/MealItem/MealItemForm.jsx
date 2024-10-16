import { useRef } from 'react';
//import css file
import classes from './MealItemForm.module.css'
//import input from UI
import Input from '../../UI/Input';
const MealItemForm = (props) => {
    const amountRef = useRef();
    function submitAmountHandler (event) { 
        event.preventDefault();
        const amountValue = amountRef.current.value;
        if(amountValue.trim().length == 0 || amountValue < 1 || amountValue > 5) {
            return;
        }
        const amountValueToNumber = +amountValue;
        props.onSendAmount(amountValueToNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitAmountHandler}>
            <Input label='Amount'  ref = {amountRef} input={{
                id : 'amount',
                type : 'number',
                min : '1',
                max : '5',
                step : '1',
                defaultValue : '1'
            }}/>
            <button>+ Add</button>
        </form>
    )
}
export default MealItemForm;