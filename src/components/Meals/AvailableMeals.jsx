import React, { useState, useEffect } from 'react'
import Card from '../UI/Card';
import classes from "./AvailableMeals.module.css"
import MealItem from './MealItem/MealItem';


const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch("https://post-demo-a8490-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json")

            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    if: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setMeals(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message);
        });
    }, [])

    if (isLoading) return <section className={classes.spinner}></section>;
    if (httpError) return <section className={classes.error}><h1>{httpError}</h1></section>

    const mealsList = meals.map(meal => <MealItem
        id={meal.id}
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
    />)

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
