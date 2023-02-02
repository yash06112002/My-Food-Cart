import mealsImage from "../../assets/meals.jpg";
import Cartbutton from "./Cartbutton";
import classes from "./Header.module.css";

const Header = (props) => {
    return (
        <>
            <header className={classes.header}>
                <h1>My Meals</h1>
                <div><Cartbutton showCartHandler={props.showCartHandler} /></div>
            </header>
            <div className={classes['main-image']}>
                <img src={mealsImage} alt="Delicious food" />
            </div>
        </>
    )
}

export default Header