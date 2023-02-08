import React, { useRef, useState } from 'react'
import classes from "./Checkout.module.css"


const valid = (text) => {
    if (text.trim().length !== 0) return true
    return false
}
const Checkout = (props) => {
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const [inputsValid, setInputsValid] = useState({
        nameIsValid: true,
        streetIsValid: true,
        postalIsValid: true,
        cityIsValid: true
    })

    const confirmHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        const nameValid = valid(name)
        const streetValid = valid(street)
        const postalValid = !isNaN(postal) && postal.trim().length === 6
        const cityValid = valid(city)
        const formValid = nameValid && streetValid && postalValid && cityValid
        setInputsValid({
            nameIsValid: nameValid,
            streetIsValid: streetValid,
            postalIsValid: postalValid,
            cityIsValid: cityValid
        })
        if (!formValid) {
            console.log(name, street, postal, city)
        }
        else {
            props.onOrder({
                name: name,
                street: street,
                postal: postal,
                city: city
            })
        }
    };

    const nameClass = `${classes.control} ${inputsValid.nameIsValid ? "" : classes.invalid}`
    const streetClass = `${classes.control} ${inputsValid.streetIsValid ? "" : classes.invalid}`
    const postalClass = `${classes.control} ${inputsValid.postalIsValid ? "" : classes.invalid}`
    const cityClass = `${classes.control} ${inputsValid.cityIsValid ? "" : classes.invalid}`
    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={nameClass}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameRef} />
                {!inputsValid.nameIsValid && <p>Enter Valid Name</p>}
            </div>
            <div className={streetClass}>
                <label htmlFor='street'>Street</label>
                <input type='text' id='street' ref={streetRef} />
                {!inputsValid.streetIsValid && <p>Enter Valid Street</p>}
            </div>
            <div className={postalClass}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
                {!inputsValid.postalIsValid && <p>Enter Valid Postal</p>}
            </div>
            <div className={cityClass}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
                {!inputsValid.cityIsValid && <p>Enter Valid City</p>}
            </div>
            <div className={classes.actions}>
                <button className={classes.submit} onClick={confirmHandler}>Confirm</button>
                <button className={classes.cancel} onClick={props.cancelCheckoutHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout