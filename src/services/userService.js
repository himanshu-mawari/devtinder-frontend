import axios from "axios";
import { BASE_URL } from "../utils/constants";

export const getProfileData = () => {
  return axios.get(BASE_URL + "profile/view", {
    withCredentials: true,
  });
};

export const getEditProfile = (
  firstName,
  lastName,
  profilePicture,
  age,
  gender,
  bio,
  skills,
) => {
  return axios.patch(
    BASE_URL + "profile/edit",
    { firstName, lastName, profilePicture, age, gender, bio, skills },
    { withCredentials: true },
  );
};

export const getChangePassword = (oldPassword, newPassword) => {
  return axios.patch(
    BASE_URL + "profile/reset-password",
    { oldPassword, newPassword },
    { withCredentials: true },
  );
};

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

export const deleteSkill = (skillToRemove) => {
  return axios.patch(
    BASE_URL + "profile/remove/skill",
    { removeSkill: skillToRemove },
    { withCredentials: true },
  );
};


