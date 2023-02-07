import React, { useRef } from 'react'
import classes from "./Checkout.module.css"

const Checkout = (props) => {
    const nameRef = useRef();
    const streetRef = useRef();
    const postalRef = useRef();
    const cityRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();
        const name = nameRef.current.value;
        const street = streetRef.current.value;
        const postal = postalRef.current.value;
        const city = cityRef.current.value;

        console.log(name, street, postal, city)
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' ref={nameRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='street'>Name</label>
                <input type='text' id='street' ref={streetRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='postal'>Postal Code</label>
                <input type='text' id='postal' ref={postalRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input type='text' id='city' ref={cityRef} />
            </div>
            <div className={classes.actions}>
                <button className={classes.submit} onClick={confirmHandler}>Confirm</button>
                <button className={classes.cancel} onClick={props.cancelCheckoutHandler}>Cancel</button>
            </div>
        </form>
    )
}

export default Checkout