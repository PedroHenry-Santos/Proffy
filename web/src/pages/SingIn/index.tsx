import React, {useContext} from 'react';
import { Link } from 'react-router-dom';

import LogoItem from '../../components/LogoItem';
import AuthContext from '../../contexts/auth';

import purpleHeart from '../../assets/images/icons/purple-heart.svg';
import viewPassword from '../../assets/images/icons/view-password.svg';

import './styles.css';

const SingIn = () => {

  const {signed, user, singIn} = useContext(AuthContext);

  console.log(signed);
  console.log(user);

  function handleSingIn () {
    singIn();
  }

  return (

    <div id="page-singin-content" className="conteiner">

      <div className="logo-page-content">
        <LogoItem/> 
      </div>

      <div className="form-page-content">

        <form>
          
          <fieldset>

            <legend>Fazer Login</legend>

            <div className="input-email">
              <input type="text" id="email" placeholder="E-mail" />
            </div>

            <div className="input-password">
              <input type="password" id="password" placeholder="Senha" />
              <button type="button"><img src={viewPassword} alt="visualizar"/></button>
            </div>

            <div className="login-helper">

              <div className="remember-password">
                <label className="check-container">
                  <input type="checkbox" id="remember" />
                  <span className="check"></span>
                </label>
                
                <p>Lembre-me</p>
              </div>

              <Link to="/indentify">Equeci minha senha</Link>

            </div>

          </fieldset>

          <button type="button" onClick={handleSingIn}>
            Entrar
          </button>

        </form>

        <footer className="footer-direction">

          <div>
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