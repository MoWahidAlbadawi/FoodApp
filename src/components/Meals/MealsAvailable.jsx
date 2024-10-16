//import css file
import classes from './MealsAvailable.module.css'
//import MealItem component
import MealItem from './MealItem/MealItem';
//import UI Card for ul
import Card from '../UI/Card';
import { useEffect, useState } from 'react';

const MealsAvailable = () => {
    const [meals , setMeals]  = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);
    async function fetchingDataHandler () {
        setIsLoading(true);
        try {
        const response = await fetch('https://foodapp-5ab37-default-rtdb.firebaseio.com/meals.json');
        if(!response.ok) {
            throw new Error('something went wrong , please try again');
        }
        const responseData = await response.json();
        let loadMeals = [];
        for (const key in responseData) {
            loadMeals.push({
                id : key,
                name : responseData[key].name,
                description : responseData[key].description,
                price : responseData[key].price
            });
            }
            setMeals(loadMeals);
        }
    catch (error) {
        setError(error.message);
    }
    setIsLoading(false);
}
    useEffect(() => {
        fetchingDataHandler();  
},[]);
    let MealsList = meals.map(meal => 
       <MealItem key={meal.id}
       id = {meal.id}
        name = {meal.name}
        description = {meal.description}
        price = {meal.price} />
);

    if(isLoading) 
        return <p className={classes.toAccess}>...Loading</p>
        if(error) 
            return <p className={classes.toAccess}>{error}</p>
    return (
        <section className={classes.meals}>
            <Card>
            <ul>
                {MealsList}
            </ul>
            </Card>
        </section>
    )
}
export default MealsAvailable;