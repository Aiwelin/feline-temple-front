export default interface UserJson {
  id: number;
  avatar: string;
  name: string;
  lastName: string;
  birthdate: string;
  address: string;
  email: string;
  password: string;
  nbCats: number;
  catSitter: boolean;
  siren?: string;
  siret?: string;
}
