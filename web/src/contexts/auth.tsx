import React, {createContext, useState, useEffect} from 'react';

import * as auth from '../services/auth';
import api from '../services/api';

interface AuthContextData {
  signed: boolean;
  user: object | null;
  singIn(): Promise<void>;
  singOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

  const [user, setUser] = useState<object | null>(null);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await localStorage.getItem('@RNAuth:user');
      const storeageToken = await localStorage.getItem('@RNAuth:token');

      if (storageUser && storeageToken) {
        setUser(JSON.parse(storageUser));
      }
    }

    loadStorageData();
  }, []);

  async function singIn() {
    const response = await auth.singIn();

    setUser(response.user);

    await localStorage.setItem('@RNAuth:user', JSON.stringify(response.user));
    await localStorage.setItem('@RNAuth:token', response.token);
  }

  async function singOut() {

    localStorage.clear()

    await setUser(null);
  }

  return (
    <AuthContext.Provider value={{signed: !!user, user, singIn, singOut}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;