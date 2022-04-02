import React, {useEffect, useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";
import "../styles/Meme.css"



const Meme = (props) => {

    const btnClick = (e) => {
        e.preventDefault()
        getRandomMemeUrl()
    }

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemes, setAllMemes] = useState('')

    useEffect(()=>{
        async function getMemes(){
            const result = await fetch('https://api.imgflip.com/get_memes')
            const data = await result.json()
            setAllMemes(data.data.memes)
        }
        getMemes()
    },[])



    function getRandomNumber(maxNum) {
        return Math.floor(Math.random() * maxNum)
    }

    function getRandomMemeUrl() {
        let index = getRandomNumber(allMemes.length)
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: allMemes[index].url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <div className="meme">
            <div className="meme__container _container">
                <form className="meme__form form-meme">
                    <div className="form-meme__inputs">
                        <MyInput
                            className="form-meme__input"
                            value={meme.topText}
                            placeholder='Текст наверху'
                            name="topText"
                            onChange={handleChange}
                        />
                        <MyInput
                            className="form-meme__input"
                            placeholder='Текст внизу'
                            value={meme.bottomText}
                            name="bottomText"
                            onChange={handleChange}
                        />
                    </div>
                    <MyButton onClick={btnClick}>Получить новое изображение мема 🖼</MyButton>
                </form>
            </div>

            <div className="meme__image image-meme _container">
                <img src={meme.randomImage} alt="meme image"/>
                <h1 className="image-meme__text top">{meme.topText}</h1>
                <h1 className="image-meme__text bottom">{meme.bottomText}</h1>
            </div>
        </div>

    );
};

export default Meme;