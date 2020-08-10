import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SingIn from '../pages/SingIn';
import SingUp from '../pages/SingUp';
import RecoverPass from '../pages/RecoverPass';


const AppRoutes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={SingIn} />
      <Route path="/sing-up" exact component={SingUp} />
      <Route path="/indentify" exact component={RecoverPass} />
    </Switch>
  </BrowserRouter>
);

export default AppRoutes;

