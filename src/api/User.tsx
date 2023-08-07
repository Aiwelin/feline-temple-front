import { useState, useEffect } from "react";
import { DOMAIN } from "./URL";
import users from './json/users'

async function FetchAPI() {
    const [data, setData] = useState({});


    //Get Method
    const apiGet = () => {
        console.log(users)
    };

    return (
        <div>My API</div>
    );
}

export default FetchAPI;