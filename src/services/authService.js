import axios from "axios";
import { BASE_URL } from "../utils/constants";


export const login = (   email,
          password) => {return axios.post(
        BASE_URL + "login",
        {
          email,
          password,
        },
        { withCredentials: true })}
export const logout =   () => {return axios.post(BASE_URL + "logout", {}, { withCredentials: true })}
export const signUp = (firstName, lastName, email, password ) => {return axios.post(
        BASE_URL + "signup",
        { firstName, lastName, email, password },
        { withCredentials: true },
      )}