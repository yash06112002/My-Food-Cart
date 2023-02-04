import React, { useContext } from 'react'
import CartIcon from "../Cart/CartIcon";
import classes from "./Cartbutton.module.css";
import CartContext from '../../store/CartContext';

const Cartbutton = (props) => {
    const cartCtx = useContext(CartContext);
    const numOfItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0)
    return (
        <button className={classes.button} onClick={props.showCartHandler}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfItems}</span>
        </button>
    )
}

export default Cartbutton