import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherFrom from '../pages/TeacherForm';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/study" exact component={TeacherList} />
        <Route path="/give-classes" exact component={TeacherFrom} />
      </Switch>
    </BrowserRouter>
  )
}

export default AuthRoutes;
