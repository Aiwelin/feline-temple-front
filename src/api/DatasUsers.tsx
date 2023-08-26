const getDatasUsers = () => {
  return [
    {
      id: 1,
      avatar: "src/assets/avatar/apichard.jpg",
      name: "Amandine",
      lastName: "PICHARD",
      birthdate: "1991-04-13",
      address: "18 RUE MAGDALINE, 44700 NANTES",
      email: "amandine.pichard.auditeur@lecnam.net",
      nbCats: 1,
      catSitter: true,
    },
    {
      id: 2,
      avatar: "",
      name: "Maecenas",
      lastName: "TEMPUS",
      birthdate: "1999-12-25",
      address: "Lorem ispum",
      email: "test@yopmail.com",
      nbCats: 2,
      catSitter: true,
      siren: 947896296,
      siret: 94789629600011,
    },
    {
      id: 3,
      avatar: "",
      name: "Maximus",
      lastName: "Clavus",
      birthdate: "1989-04-02",
      address: "Lorem ispum, 424242 IPSUM",
      email: "test1@yopmail.com",
      nbCats: 1,
      catSitter: true,
    },
    {
      id: 4,
      avatar: "",
      name: "Nullam",
      lastName: "DONEC",
      birthdate: "1955-04-02",
      address: "Lorem ispum",
      email: "test1@yopmail.com",
      nbCats: 3,
      catSitter: false,
    },
  ];
};

export default getDatasUsers;
