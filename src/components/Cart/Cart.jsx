import React from 'react'
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: "c1", name: "Sushi", amount: 2, price: 12 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    )
    return (
        <Modal hideCartHandler={props.hideCartHandler}>
            {cartItems}
            <div className={classes.total}>
                <span>Amount</span>
                <span>10</span>
            </div>
            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart