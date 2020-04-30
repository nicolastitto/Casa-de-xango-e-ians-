import React from 'react';
import './Header.css';

import logoImg from '../../../assets/logo.svg';
import iconTalk from '../../../assets/icons/icon-faleconosco.svg';
import iconMenu from '../../../assets/icons/icon-menu.svg';


export default function Header() {

    /*  Caso tenha que criar o ícone de menu no mobile.


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

    {(isNavVisible || !isSmallScreen) && (Colocar código entre essa função)}
     
            Ícone
            <button onClick={toggleNav}>
                <img src={iconMenu} alt="" />
            </button>
    */

    return (
        <header className="Header">

                <img src={logoImg} className="logo" alt="Casa de Xangô e Iansã" />
            
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
        </header>
    );
}
