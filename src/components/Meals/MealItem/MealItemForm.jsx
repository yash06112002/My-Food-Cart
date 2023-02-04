import React, { useRef, useState } from 'react'
import Input from '../../UI/Input'
import classes from "./MealItemForm.module.css"

const MealItemForm = (props) => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();

    const submitHandler = event => {
        event.preventDefault();

        const amount = amountInputRef.current.value
        const amountNum = +amount

        if (amount.trim().length === 0 || amountNum < 1 || amountNum > 5) {
            setAmountIsValid(false)
            return;
        }
        props.onAddToCart(amountNum)
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input ref={amountInputRef} label="Amount" input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                step: "1",
                defaultValue: "1"
            }} />
            <button>+ Add</button>
            {!amountIsValid && <p>Enter a valid amount(1-5)</p>}
        </form>
    )
}

export default MealItemForm