import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const getConnection = () => {
  return axios.get(BASE_URL + "user/connections", {
    withCredentials: true,
  });
};

export const deleteConnection = (userId) => {
  return axios.delete(`${BASE_URL}request/connection/${userId}`, {
    withCredentials: true,
  });
};