import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getFeed = () => {
  return axios.get(BASE_URL + "user/feed", {
    withCredentials: true,
  });
};
