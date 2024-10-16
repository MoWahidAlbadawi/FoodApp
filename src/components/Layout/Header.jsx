import classes from './Header.module.css';
//import photo meals
import meals from '../../assets/meals.jpg'
//import button for header
import HeaderCartButton from './HeaderCartButton';
import { Fragment } from 'react';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
            <h1 className={classes.h1}>WahidMeals</h1>
            <HeaderCartButton onClick ={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
            <img src={meals}/>
            </div>
        </Fragment>
    )
}
export default Header;