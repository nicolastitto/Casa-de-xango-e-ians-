import React from 'react';

import './Agenda.css';
import iconInf from '../../../assets/icons/icon-information.svg';
import iconNext from '../../../assets/icons/icon-next.svg';
import iconPrev from '../../../assets/icons/icon-previous.svg';
import arte1 from '../../../assets/Imagens/Agenda/arte1.png';
import arte2 from '../../../assets/Imagens/Agenda/arte2.png';
import arte3 from '../../../assets/Imagens/Agenda/arte3.png';
import arte4 from '../../../assets/Imagens/Agenda/arte4.png';

export default function Agenda() {
  return (
    <div className="agenda-conteiner">
      <header>
        <h1>Agenda</h1>
        <section>
          <img src={iconInf} alt="" />
          <p>A agenda de Abril foi cancelada devido a segurança emergencial de saúde. As artes postadas neste mês são somente de divulgação de conteúdo online.</p>
        </section>
      </header>
      <div className="wrapper">
        <section>
          <button><img src={iconPrev} alt=""/></button>
          <img src={arte1} alt=""/>
          <img src={arte2} alt=""/>
          <img src={arte3} alt=""/>
          <img src={arte4} alt=""/>
          <button><img src={iconNext} alt=""/></button>
        </section>
      </div>

      <div className="wrapper-mobile">
        <section>
          <button><img src={iconPrev} alt=""/></button>
          <img src={arte1} alt=""/>
          <img src={arte2} alt=""/>
          <img src={arte3} alt=""/>
          <img src={arte4} alt=""/>
          <button><img src={iconNext} alt=""/></button>
        </section>
      </div>
    </div>
  )
}