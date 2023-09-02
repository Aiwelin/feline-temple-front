import * as React from "react";
import getDatasUsers from "../api/DatasUsers";

const AuthentificationContext = React.createContext({
  id: 0,
  avatar: "",
  name: "",
  lastName: "",
  birthdate: "",
  address: "",
  email: "",
  password: "",
  nbCats: 0,
  catSitter: false,
  isConnected: false,
});

const AuthentificationContextProvider = ({ children }: any) => {
  const users = getDatasUsers();
  const user = users.find((user) => user.id === 1);
  if (user) {
    const [currentUser, setCurrentUser] = React.useState({
      id: user.id,
      avatar: user.avatar,
      name: user.name,
      lastName: user.lastName,
      birthdate: user.birthdate,
      address: user.address,
      email: user.email,
      password: user.password,
      nbCats: user.nbCats,
      catSitter: false,
    });
    const userContextValue = React.useMemo(
      () => ({
        id: currentUser.id,
        avatar: currentUser.avatar,
        name: currentUser.name,
        lastName: currentUser.lastName,
        birthdate: currentUser.birthdate,
        address: currentUser.address,
        email: currentUser.email,
        password: currentUser.password,
        nbCats: currentUser.nbCats,
        catSitter: currentUser.catSitter,
        isConnected: true,
      }),
      [currentUser.id]
    );
    return (
      <AuthentificationContext.Provider value={userContextValue}>
        {children}
      </AuthentificationContext.Provider>
    );
  }
};

export { AuthentificationContextProvider, AuthentificationContext };
