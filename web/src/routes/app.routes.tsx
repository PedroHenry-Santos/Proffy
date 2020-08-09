import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import RecoverPass from '../pages/RecoverPass';


const AppRoutes = () => (
  <BrowserRouter>
    <Route path="/" exact component={SingIn} />
    <Route path="/sing-up" exact component={SingUp} />
    <Route path="/indentify" exact component={RecoverPass} />
  </BrowserRouter>
);

export default AppRoutes;

