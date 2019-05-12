import React from 'react';

const datas = {
  id: 0,
  email: '',
  isAuthentified: false,
  solde: 0,
  favoris: []
};

export const UserContext = React.createContext({});

export const userContextData = datas;
export const UserProvider = UserContext.Provider;
export const UserConsumer = UserContext.Consumer;

