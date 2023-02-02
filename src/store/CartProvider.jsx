import CartContext from "./CartContext";

const CartProvider = (props) => {
    const addToCartHandler = item => { }
    const removeromCartHandler = id => { }

    const cartContext = {
        items: [],
        totalAmount: 0,
        addItem: addToCartHandler,
        removeItem: removeromCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider