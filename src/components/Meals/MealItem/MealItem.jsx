import React, { useContext } from 'react'

import classes from "./MealItem.module.css"
import MealItemForm from './MealItemForm'
import CartContext from '../../../store/CartContext'

const MealItem = (props) => {
    const price = `$${props.price.toFixed(2)}`
    const CartCtx = useContext(CartContext);

    const addToCartHandler = amount => {
        CartCtx.addItem({
            id: props.id,
            name: props.name,
            price: props.price,
            amount: amount
        })
    }
    return (
        <li className={classes.meal}>
            <div>
                <h3>
                    {props.name}
                </h3>
                <div className={classes.description}>
                    {props.description}
                </div>
                <div className={classes.price}>
                    {price}
                </div>
            </div>
            <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </li>
    )
}

export default MealItem