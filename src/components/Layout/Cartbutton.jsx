import React, { useState, useEffect, useContext } from 'react'
import CartIcon from "../Cart/CartIcon";
import classes from "./Cartbutton.module.css";
import CartContext from '../../store/CartContext';

const Cartbutton = (props) => {
    const [highlightBtn, setHighlightBtn] = useState(false);
    const cartCtx = useContext(CartContext);
    const numOfItems = cartCtx.items.reduce((currNum, item) => {
        return currNum + item.amount
    }, 0)

    const btnClass = `${classes.button} ${highlightBtn ? classes.bump : ""}`
    useEffect(() => {
        if (cartCtx.items.length === 0) return

        setHighlightBtn(true);
        const timer = setTimeout(() => {
            setHighlightBtn(false)
        }, 300);
        return () => {
            clearTimeout(timer)
        }
    }, [cartCtx.items])
    return (
        <button className={btnClass} onClick={props.showCartHandler}>
            <span className={classes.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numOfItems}</span>
        </button>
    )
}

export default Cartbutton