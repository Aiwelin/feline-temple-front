import { useState } from "react";
import { UserJson } from "../interface/User";

const [users, setUsers] = useState([]);

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Users is not OK");
    }
    const data = await response.json();
    console.log(data);
    setUsers(data);
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchUsers;
