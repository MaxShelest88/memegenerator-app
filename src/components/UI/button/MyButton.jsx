import React from 'react';
import classes from "./MyButton.module.css";

const MyButton = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={classes.myButton}>
            {children}
        </button>
    );
};

export default MyButton;