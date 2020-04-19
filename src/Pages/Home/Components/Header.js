import React, { useState, useEffect } from 'react';
import './Header.css';

import logoImg from '../../../assets/logo.svg';
import iconTalk from '../../../assets/icons/icon-faleconosco.svg';
import iconMenu from '../../../assets/icons/icon-menu.svg';

export default function Header() {
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(()=> {
        const mediaQuery = window.matchMedia("(max-width: 700px)");
        mediaQuery.addListener(handleMediaQueryChange);
        handleMediaQueryChange(mediaQuery);

        return() => {
            mediaQuery.removeListener(handleMediaQueryChange);
        };
    }, []);

    const handleMediaQueryChange = mediaQuery => {
        if (mediaQuery.matches){
            setIsSmallScreen(true);
        }else {
            setIsSmallScreen(false);
        }
    }

    const toggleNav = () => {
        setIsNavVisible(!isNavVisible);
    };

    return (
        <header className="Header">
            <img src={logoImg} className="logo" alt="Casa de Xangô e Iansã" />

            {(isNavVisible || !isSmallScreen) && (
                <nav className="Nav">
                    <div className = "spacer"/>
                    <div className="dropdown">
                        <div className="icon">
                            <span>Fale Conosco</span>
                            <img src={iconTalk} alt="" />
                        </div>
                        <div className="dropdown-content">
                            <p>Tel.:(xx)xxxx-xxxx</p>
                            <p>Whatsapp:(xx)xxxx-xxxx</p>
                            <p>Email:exemplo@gmail.com</p>
                            <p>Atendimento</p>
                            <p>Segunda à Sexta das 9h às 18h</p>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="icon">
                            <span>Menu</span>
                            <img src={iconMenu} alt="" />
                        </div>
                        <div className="dropdown-content">
                            <p>Início</p>
                            <p>Baixe</p>
                            <p>Agenda</p>
                            <p>Galeria</p>
                            <p>Conectado</p>
                            <p>Contate-nos</p>
                        </div>
                    </div>
                </nav>
            )}

            <button  onClick={toggleNav}>
                <img src={iconMenu} alt=""/>
            </button>              
        </header>
    );
}
