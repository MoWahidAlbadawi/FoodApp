//import css file
import classes from './MealsAvailable.module.css'
//import MealItem component
import MealItem from './MealItem/MealItem';
//import UI Card for ul
import Card from '../UI/Card';
import { useEffect, useState } from 'react';
import  databases  from '../../lib/appwrite'
//MY DATABASE ID 
const MealsAvailable = () => {
    const [meals , setMeals]  = useState([]);
    const [isLoading , setIsLoading] = useState(false);
    const [error , setError] = useState(null);
    async function fetchingDataHandler () {
        setIsLoading(true);
        try {
                const respponse =  await databases.listDocuments(
                  '67345e81001536702983',
                  '67345e9d00252a60586a',
                );
            setMeals(respponse.documents);
        }
    catch (error) {
        setError(error.message);
    }
    setIsLoading(false);
}
    useEffect(() => {
        fetchingDataHandler();
},[databases]);
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
            return <p className={classes.toAccess}>{error}! try again please</p>
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