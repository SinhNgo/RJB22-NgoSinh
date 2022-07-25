import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CallApi() {
  const [users, setUsers] = useState([]);

  async function fetchData() {
    try {
      let response = await axios("/usersLead");
      let tempUsers = await response.data;
      console.log(response);
      setUsers(tempUsers);
    } catch (err) {
      console.log("Error: ", err.message);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return;
  <div></div>;
}
