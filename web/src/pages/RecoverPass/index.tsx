import React from 'react';
import { Link } from 'react-router-dom';

import LogoItem from '../../components/LogoItem';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


const SingUp = () => {
  return (
    <div id="page-recover-content" className="conteiner">
      
      <div className="form-container">
        <header>
          <Link to="/">
            <img className="back-buuton" src={backIcon} alt="voltar" />
          </Link>
        </header>
        <form action="">
          <fieldset>
            <legend>Eita, esqueceu sua senha?</legend>
            <p>Não esquenta, vomos dar um jeito nisso.</p>
            <div className="input-block">
              <input type="text" id="email" placeholder="E-mail" />
            </div>
          </fieldset>
          <button type="submit">
            Enviar
          </button>
        </form>
      </div>
      <div className="logoItem-container">
        <LogoItem/> 
      </div>
    </div>
  );
}

export default SingUp;