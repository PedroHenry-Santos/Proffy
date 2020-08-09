import React from 'react';
import { Link } from 'react-router-dom';

import LogoItem from '../../components/LogoItem';

import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


const SingUp = () => {
  return (
    <div id="page-singup-content" className="conteiner">
      
      <div className="form-container">
        <header>
          <Link to="/">
            <img className="back-buuton" src={backIcon} alt="voltar" />
          </Link>
        </header>
        <form action="">
          <fieldset>
            <legend>Cadastro</legend>
            <p>Preencha os dados abaixo para começar</p>
            <div className="input-block-login">
              <input type="text" id="email" placeholder="Nome" />
            </div>
            <div className="input-block">
              <input type="text" id="email" placeholder="Sobrenome" />
            </div>
            <div className="input-block">
              <input type="text" id="email" placeholder="E-mail" />
            </div>
            <div className="input-block-password">
              <input type="password" id="password" placeholder="Senha" />
            </div>
          </fieldset>
          <button type="submit">
            Concluir cadastro
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