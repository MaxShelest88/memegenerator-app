import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "../styles/Meme.css"
import memesData from "../memedata"



const Meme = (props) => {

    const btnClick = (e) => {
        e.preventDefault()
        getRandomMemeUrl()
    }

    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImages, setAllMemeImages] = React.useState(memesData.data.memes)


    function getRandomNumber(maxNum){
        return Math.floor(Math.random() * maxNum)
    }

    function getRandomMemeUrl(){
        let index = getRandomNumber(allMemeImages.length)
        setMeme(prevMeme=>({
            ...prevMeme,
            randomImage: allMemeImages[index].url
        }))
    }

    return (
        <div>
            <form className="meme">
                <div className="meme__container _container">
                    <div className="meme__inputs">
                        <MyInput  placeholder='Текст наверху'/>
                        <MyInput placeholder='Текст внизу'/>
                    </div>
                    <MyButton onClick={btnClick}>Get a new meme image  🖼</MyButton>
                </div>
            </form>
            <div className="image _container">
                <img src={meme.randomImage} />
            </div>
        </div>

    );
};

export default Meme;