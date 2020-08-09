import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Landing from '../pages/Landing';
import TeacherList from '../pages/TeacherList';
import TeacherFrom from '../pages/TeacherForm';

const AuthRoutes = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Landing} />
      <Route path="/study" exact component={TeacherList} />
      <Route path="/give-classes" exact component={TeacherFrom} />
    </BrowserRouter>
  )
}

export default AuthRoutes;
