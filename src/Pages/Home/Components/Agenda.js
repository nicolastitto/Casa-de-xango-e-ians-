import React from 'react';

import './Agenda.css';

import iconInf from '../../../assets/icons/icon-information.svg';

import PlayAgenda from './PlayAgenda';

export default function Agenda() {
  return (
    <div className="agenda-conteiner">
      <div id="agd-text">
        <h1>Agenda</h1>
        <div className="meses">
          <p>Abril</p>
          <p>Maio</p>
          <p>Junho</p>
        </div>
        <section  className="infoagenda">
          <img src={iconInf} alt="" />
          <div>
            <p>A agenda de Abril foi cancelada devido a segurança emergencial de saúde. </p>
            <p>As artes postadas neste mês são somente de divulgação de conteúdo online.</p>
          </div>
        </section>
      </div>
      <div className="wrapper">
        <PlayAgenda/>
      </div>
    </div>
  )
}