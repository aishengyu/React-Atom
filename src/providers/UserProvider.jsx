import React, {createContext, useState} from 'react';

export const UserContext = createContext({});

export const UserProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState(null);
  //const contextName = "UserProvider";
  return (
    <UserContext.Provider value = {{userInfo, setUserInfo}}>
        {children}
    </UserContext.Provider>
  );
}
