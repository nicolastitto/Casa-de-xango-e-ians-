import React, { useState, useEffect } from 'react';
import './Header.css';

import logoImg from '../../../assets/logo.png';
import iconTalk from '../../../assets/icons/icon-faleconosco.svg';
import iconMenu from '../../../assets/icons/icon-menu.svg';


export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return () => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches) {
            setIsSmallScreen(true);
        } else {
            setIsSmallScreen(false);
        }
    }

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="Header">
            <div className="title" id="t">
                <img src={logoImg} className="logo" alt="Casa de Xangô e Iansã" />
                <div className = "title-name">
                    <h1>Casa de Xangô e Iansã</h1>
                    <p>Terreiro de Umbanda São Jerônimo e Santa Bárbara</p>
                </div>
            </div>

            {(isNavVisible || !isSmallScreen) && (
                <nav className="Nav">
                    <div className="spacer" />
                    <div className="dropdown">
                        <div className="icon">
                            <span>Fale Conosco</span>
                            <img src={iconTalk} alt="" />
                        </div>
                        <div id="sub-info" className="dropdown-content">
                            <p>Tel.:(xx)xxxx-xxxx</p>
                            <p>Whatsapp:(xx)xxxx-xxxx</p>
                            <p>Email:exemplo@gmail.com</p>
                            <br />
                            <p id="atd">Atendimento</p>
                            <p>Segunda à Sexta </p>
                            <p>das 9h às 18h</p>
                            <div class="social">
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/casadexangoeiansa/"><div class="instagram"></div></a>
                                </div>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/casadexangoeiansa2/"><div class="facebook"></div></a>
                                </div>
                                <div>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/casadexangoeiansa2/"><div class="whatsapp"></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown" id="menu-icon">
                        <div className="icon">
                            <span>Menu</span>
                            <img src={iconMenu} alt="" />
                        </div>
                        <div id="sub-menu" className="dropdown-content">
                            <a href="/">Início</a>
                            <a href="/"> Baixe</a>
                            <a href="/">Agenda</a>
                            <a href="/"> Galeria </a>
                            <a href="/">Conectados</a>
                            <a href="/">Contate-nos</a>
                        </div>
                    </div>
                </nav>
            )}

            <button onClick={toggleNav}>
                <img src={iconMenu} alt="" />
            </button>
        </header>
    );
}
