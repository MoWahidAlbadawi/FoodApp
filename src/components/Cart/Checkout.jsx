//import css file
import { useState } from 'react';
import classes from './Checkout.module.css';
const Checkout = (props) => {
   const [enteredName , setEnteredName] = useState('');
   const [enteredCity , setEnteredCity] = useState('');
   const [enteredStreet , setEnteredStreet] = useState('');
   const [enteredPostalCode , setEnteredPostalCode] = useState('');

   const [touchedState , setTouchedState] = useState(false);

   const enteredNameIsValid = enteredName.trim() !== '';
   const enteredCityIsValid = enteredCity.trim() !== '';
   const enteredStreetIsValid = enteredStreet.trim() !== '';
   const enteredPostalCodeIsValid = enteredPostalCode.length === 5;

   const inValidName = !enteredNameIsValid && touchedState;
   const inValidCity = !enteredCityIsValid && touchedState;
   const inValidStreet = !enteredStreetIsValid && touchedState;
   const inValidPostalCode = !enteredPostalCodeIsValid && touchedState;

   let formIsValid = false;
   if(enteredNameIsValid && enteredCityIsValid && enteredStreetIsValid && enteredPostalCodeIsValid) {
      formIsValid = true;
   }

   function changeNameHandler (event) {
      setEnteredName(event.target.value);
   }
   function changeCityHandler (event) {
      setEnteredCity(event.target.value);
   }
   function changeStreetHandler (event) {
      setEnteredStreet(event.target.value);
   }
   function changePostalCodeHandler (event) {
      setEnteredPostalCode(event.target.value);
   }

   function cofirmDataHandler (event) {
      event.preventDefault();
      setTouchedState(true);
      const infoOrder = {
         name : enteredName,
         city : enteredCity,
         street : enteredStreet,
         postalCode : enteredPostalCode
      };
      if(!formIsValid) 
         return;
      props.onSend(infoOrder);

      setEnteredName('');
      setEnteredCity('');
      setEnteredStreet('');
      setEnteredPostalCode('');
      setTouchedState(false);
   }

    return  <form className={classes.form}>
         <div className={classes.div}>
            <label className={classes.label}>Your name</label>
            <input value={enteredName} className={classes.input} type='text' onChange={changeNameHandler}/>
            {inValidName && <span className={classes.span}>please enter valid name</span>}
         </div>
         <div className={classes.div}>
            <label className={classes.label}>City</label>
            <input value={enteredCity}  className={classes.input} type='text' onChange={changeCityHandler}/>
            {inValidCity && <span className={classes.span}>please enter valid city</span>}
         </div>
         <div className={classes.div}>
            <label className={classes.label} >Street</label>
            <input value={enteredStreet} className={classes.input} type='text' onChange={changeStreetHandler}/>
            {inValidStreet && <span className={classes.span}>please enter valid Street</span>}
         </div>
         <div className={classes.div}>
            <label className={classes.label}>Postal Code</label>
            <input value={enteredPostalCode} className={classes.input} type='text' onChange={changePostalCodeHandler}/>
            {inValidPostalCode && <span className={classes.span}>please enter valid postal Code(5 charcters)</span>}
         </div>
         <div className={classes.controls}>
            <button onClick={props.onClose}>close</button>
            <button onClick={cofirmDataHandler}>confirm</button>
         </div>
    </form>
}
export default Checkout;

