import React from 'react';

import Routes from './routes';
import {AuthProvider} from './contexts/auth';

import './assets/styles/global.css';

const App = () => {

  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;

