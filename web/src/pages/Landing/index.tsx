import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';
import closeIcon from '../../assets/images/icons/close.svg';

import api from '../../services/api';
import AuthContext from '../../contexts/auth';

import './styles.css';


const Landing = () => {
  const [totalConnections, setTotalConnections] = useState(0);
  const {singOut} = useContext(AuthContext)

  useEffect(() => {
    api.get('connections').then(response => {
      const {total} = response.data;

      setTotalConnections(total);
    })
  }, []);

  function handleSingnOut () {
    singOut();
  }

  return (
    <div id="page-landing">

      <header id="page-landing-header">
          <div></div>
          <button type="button" onClick={handleSingnOut}>
            <img src={closeIcon} alt="Sair"/>
          </button>
      </header  >

      <div id="page-landing-logo" className="conteiner">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img 
          src={landingImg} 
          alt="Plataforma de Estudos" 
          className="hero-image" 
        />
      </div>

      <div id="page-landin-buttons">
        <p></p>
        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img  src={purpleHeartIcon} alt="Coração roxo" />
        </span>
        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Landing;
