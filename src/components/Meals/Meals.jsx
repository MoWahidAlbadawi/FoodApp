import { Fragment } from "react";
//import MealsSummary
import MealsSummary from "./MealsSummary";
//imort MealsAvailable
import MealsAvailable from "./MealsAvailable";
const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            <MealsAvailable />
        </Fragment>
    )
}
export default Meals;