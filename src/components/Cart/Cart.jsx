import React, { useContext, useState } from 'react'
import Modal from '../UI/Modal';
import classes from "./Cart.module.css";
import CartContext from '../../store/CartContext';
import CartItem from "./CartItem"
import Checkout from './Checkout';

const Cart = (props) => {

    const [checkout, setCheckout] = useState(false);

    const CartCtx = useContext(CartContext);
    const totalAmount = `$ ${CartCtx.totalAmount.toFixed(2)}`
    const hasItems = CartCtx.items.length > 0

    const addToCartHandler = item => {
        CartCtx.addItem({ ...item, amount: 1 })
    }
    const removeFromCartHandler = id => {
        CartCtx.removeItem(id)
    }
    const checkoutHandler = () => setCheckout(true);
    const cancelCheckoutHandler = () => setCheckout(false);

    const cartItems = (
        <ul className={classes['cart-items']}>
            {CartCtx.items.map((item) => (
                <CartItem
                    key={item.id}
                    name={item.name}
                    amount={item.amount}
                    price={item.price}
                    onRemove={removeFromCartHandler.bind(null, item.id)}
                    onAdd={addToCartHandler.bind(null, item)}
                />
            ))}
        </ul>
    )

    return (
        <Modal hideCartHandler={props.hideCartHandler}>
            {!checkout && <div>
                {cartItems}
                <div className={classes.total}>
                    <span>Amount</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.hideCartHandler}>Close</button>
                    {hasItems && <button className={classes.button} onClick={checkoutHandler}>Order</button>}
                </div>
            </div>
            }
            {checkout && <div >
                <Checkout cancelCheckoutHandler={cancelCheckoutHandler} />
            </div>}
        </Modal>
    )
}

export default Cart