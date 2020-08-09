import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import background from '../../assets/images/background.svg';

import './styles.css';

const LogoItem = () => {
  return (
    <div className="logo-item">
      <img className="background-item" src={background} alt="backgrond" />
      <div className="logo-container">
        <img src={logoImg} alt="Proffy"/>
        <h2>Sua plataforma de estudos online.</h2>
      </div>
    </div>
  );
}

export default LogoItem;