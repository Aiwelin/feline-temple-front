import { useState, useEffect } from "react";
import users from "./json/Users";

async function FetchUsers() {
  const [data, setData] = useState({});

  //Get Method
  const apiGet = () => {
    console.log(users);
  };

  return <div>My API</div>;
}

export default FetchUsers;
