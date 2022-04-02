import React from 'react';
import trollFace from '../images/Troll Face.png'
import '../styles/Header.css'

const Header = () => {
    return (
            <header className="header">
                <div className="header__container _container">
                        <a href="#" className="header__logo">
                            <div className="header__logo-image">
                                <img src={trollFace} alt=""/>
                            </div>
                            <div className="logo__text">Генератор мемов</div>
                        </a>
                        <div className="header__info">Максим Шелест</div>
                </div>
            </header>
    );
};

export default Header;