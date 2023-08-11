import { ImgHTMLAttributes } from "react";

export default interface User {
  avatar: string;
  name: string;
  lastName: string;
  address: string;
  isConnected: boolean;
}
