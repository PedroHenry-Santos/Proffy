import React from 'react';
import { Link } from 'react-router-dom';

import LogoItem from '../../components/LogoItem';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import viewPassword from '../../assets/images/icons/view-password.svg';

import './styles.css';

const SingIn = () => {
  return (
    <div id="page-singin-content" className="conteiner">
      <div className="logoItem-container">
        <LogoItem/> 
      </div>
      <div className="form-container">
        <form action="">
          <fieldset>
            <legend>Fazer Login</legend>
            <div className="input-block-login">
              <input type="text" id="email" placeholder="E-mail" />
            </div>
            <div className="input-block-password">
              <input type="password" id="password" placeholder="Senha" />
            </div>
            <div className="login-auxiliars">
              <div className="remember-block">
                <input className="input" type="checkbox" id="remember" />
                <label htmlFor="remember">Lembre-me</label>
              </div>
              <Link to="/indentify">Equeci minha senha</Link>
            </div>
          </fieldset>
          <button type="submit">
            Entrar
          </button>
        </form>
        <footer className="singup-linking">
          <div className="sing-up-direction">
            <p>Não tem conta?</p>
            <Link to="/sing-up">Cadastre-se</Link>
          </div>
          <p>É de graça <img src={purpleHeart} alt="Coração"/></p>
        </footer>
      </div>
    </div>
  );
}

export default SingIn;