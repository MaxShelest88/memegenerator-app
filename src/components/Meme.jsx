import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "../styles/Meme.css"

const Meme = (props) => {

    const btnClick = (e) => {
        e.preventDefault()
        console.log('click')
    }

    return (
        <form className="meme">
            <div className="meme__container _container">
                <div className="meme__inputs">
                    <MyInput  placeholder='Текст наверху'/>
                    <MyInput placeholder='Текст внизу'/>
                </div>
                <MyButton onClick={btnClick}>Get a new meme image  🖼</MyButton>
            </div>
        </form>
    );
};

export default Meme;