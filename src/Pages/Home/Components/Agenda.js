import React from 'react';

import './Agenda.css';

import iconInf from '../../../assets/icons/icon-information.svg';

import PlayAgenda from './PlayAgenda';

export default function Agenda() {
  return (
    <div className="agenda-conteiner">
      <header>
        <div className="name">
          <h1>Agenda</h1>
          <ul>
            <li>Abril</li>
            <li>Maio</li>
            <li>Junho</li>
          </ul>
        </div>
        <section className="infoagenda">
          <img src={iconInf} alt="" />
          <div>
            <p>A agenda de Abril foi cancelada devido a segurança emergencial de saúde. </p>
            <p>As artes postadas neste mês são somente de divulgação de conteúdo online.</p>
          </div>
        </section>
      </header>
      <div className="wrapper">
        <PlayAgenda />
      </div>
    </div>
  )
}