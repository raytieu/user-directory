import React from "react";
import axios from "axios";

function getUsers() {
    return axios.get("https://randomuser.me/api/?results=10&nat=us");
};

export default getUsers;