export interface User {
  avatar: string;
  name: string;
  lastName: string;
  address: string;
  isConnected: boolean;
}

export interface UserJson {
  id: number;
  name: string;
  lastName: string;
  birthdate: string;
  address: string;
  email: string;
  nbCats: number;
  catSitter: boolean;
  siren: string;
  siret: string;
}
