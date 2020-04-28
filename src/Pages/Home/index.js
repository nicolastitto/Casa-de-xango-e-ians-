import React from 'react';
import './styles.css';
import AbautUS from './Components/AbautUs';
import Header from './Components/Header';
import Register from './Components/Register'
import Agenda from './Components/Agenda'

export default function Home(){
    return (
        <div className="home-container">
            <Header/>
            <AbautUS/>
            <Register/>
            <Agenda/>
        </div>
    );
}