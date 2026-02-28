import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const connectionRequest = () => {
  return axios.get(BASE_URL + "user/requests/received", {
    withCredentials: true,
  });
};
export const connectionRequestReview = (status, reqId) => {
  return axios.post(
    BASE_URL + `request/review/${status}/${reqId}`,
    {},
    { withCredentials: true },
  );
};
export const connectionRequestSend = (status, userId) => {
  return axios.post(
    BASE_URL + `request/send/${status}/${userId}`,
    {},
    { withCredentials: true },
  );
};
