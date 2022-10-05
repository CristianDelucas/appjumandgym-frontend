import React, {useState} from "react";

const UserContext = React.createContext({});

export function UserContextProvider({ children }) {
  const [jwt, setJWT] = useState(null);
  
  return <UserContext.Provider value={{ jwt, setJWT }}>
      {children}
    </UserContext.Provider>
  
}

export default UserContext;