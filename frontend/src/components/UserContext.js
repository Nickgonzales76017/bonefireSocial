import {createContext} from 'preact';

import { useContext, useState, useEffect } from 'preact/hooks';

// create context
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // the value that will be given to the context
	let login_sesh = sessionStorage.getItem("login");
  const [login, setLogin] = useState(login_sesh ? login_sesh: false);
  var state = {'login' : login,'setLogin': setLogin };
  // fetch a user from a fake backend API
 

  return (
    // the Provider gives access to the context to its children
    <UserContext.Provider value={state}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider };