import React, { useState, useEffect } from "react";

import './PlayAgenda.css';

import arte1 from '../../../assets/Imagens/Agenda/arte1.png';
import arte2 from '../../../assets/Imagens/Agenda/arte2.png';
import arte3 from '../../../assets/Imagens/Agenda/arte3.png';
import arte4 from '../../../assets/Imagens/Agenda/arte4.png';

import right from '../../../assets/icons/icon-next.svg';
import left from '../../../assets/icons/icon-previous.svg';

import ImgAgenda from "./ImgAgenda";

export default function PlayAgenda() {

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

  let slideArr = [<ImgAgenda src={arte1} />,
  <ImgAgenda src={arte2} />,
  <ImgAgenda src={arte3} />,
  <ImgAgenda src={arte4} />,
  ];

  const [x, setX] = useState(0);
  const goleft = () => {
    if (!isSmallScreen) {
      x === 0 ? setX(-100 * (slideArr.length - 4)) : setX(x + 100);
    } else {
      x === 0 ? setX(-100 * (slideArr.length - 2)) : setX(x + 100);
    }
  };
  const goright = () => {
    if (!isSmallScreen) {
      x === -100 * (slideArr.length - 4) ? setX(0) : setX(x - 100);
    }else{
      x === -100 * (slideArr.length - 2) ? setX(0) : setX(x - 100);
    }
  };

  return (
    
    <div className="play">
      <div className="playagenda">
        {
          slideArr.map((item, index) => {
            return (
              <div key={index} className="slide" style={{ transform: `translateX(${x}%)` }}>
                {item}
              </div>
            )
          })
        }
      </div>

      <button id="goleft" onClick={goleft}><img src={left} alt="left"></img></button>
      <button id="goright" onClick={goright}><img src={right} alt="right"></img></button>

    </div>
      
  );

}