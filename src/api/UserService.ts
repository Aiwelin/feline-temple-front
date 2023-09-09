import UserJson from "../interface/UserJson";

const fetchUsers = async () => {
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Users is not OK");
    }
    const data: UserJson[] = await response.json();
    console.debug(data);
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
};

export default fetchUsers;
