import * as React from "react";
const AuthentificationContext = React.createContext({
  lastName: "",
  name: "",
  avatar: "",
  address: "",
  isConnected: false,
});

const AuthentificationContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = React.useState({
    lastName: "PICHARD",
    name: "Amandine",
    avatar: "../assets/avatar/apichard.jpg",
    address: "18 RUE MAGDALINE, 44700 NANTES",
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
