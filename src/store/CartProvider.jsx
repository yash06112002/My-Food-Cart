import CartContext from "./CartContext";
import { useReducer } from "react";

const defaultCart = {
    items: [],
    totalAmount: 0
}
const cartReducer = (state, action) => {
    if (action.type === "ADD_ITEM") {

        const updatedAmount = state.totalAmount + action.item.price * action.item.amount
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let updatedItems;

        if (existingItem) {
            let updatedItem = {
                ...existingItem,
                amount: Math.abs(existingItem.amount + action.item.amount)
            }
            updatedItems = [...state.items];
            updatedItems[existingItemIndex] = updatedItem
        } else {
            updatedItems = state.items.concat(action.item);

        }

        return { items: updatedItems, totalAmount: updatedAmount }
    }
    if (action.type == "REMOVE_ITEM") {

        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        const updatedAmount = state.totalAmount - existingItem.price

        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id)
        }
        else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }
        return { items: updatedItems, totalAmount: updatedAmount }
    }
    if (action.type == "CLEAR_CART") {
        return defaultCart
    }
    return defaultCart
}

const CartProvider = (props) => {

    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

    const addToCartHandler = item => {
        dispatchCart({ type: "ADD_ITEM", item: item })
    }
    const removeromCartHandler = id => {
        dispatchCart({ type: "REMOVE_ITEM", id: id })
    }
    const clearCartHandler = () => {
        dispatchCart({ type: "CLEAR_CART" })
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addToCartHandler,
        removeItem: removeromCartHandler,
        clearCart: clearCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider