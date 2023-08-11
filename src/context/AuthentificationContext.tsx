import * as React from "react";
const AuthentificationContext = React.createContext({
  lastName: null,
  name: null,
  avatar: null,
  address: null,
  isConnected: false,
});

const AuthentificationContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState({
    lastName: "test",
    name: "test",
    avatar: "/test",
    address: "test",
  });
  const userContextValue = React.useMemo(
    () => ({
      name: currentUser.name,
      lastName: currentUser.lastName,
      avatar: currentUser.avatar,
      address: currentUser.address,
      isConnected: true,
    }),
    [
      currentUser.name,
      currentUser.lastName,
      currentUser.avatar,
      currentUser.address,
    ]
  );
  return (
    <AuthentificationContext.Provider value={userContextValue}>
      {children}
    </AuthentificationContext.Provider>
  );
};

export { AuthentificationContextProvider, AuthentificationContext };
