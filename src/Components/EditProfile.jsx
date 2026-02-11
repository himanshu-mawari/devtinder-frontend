import { useState } from "react";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

export const EditProfile = ({ profileData }) => {
  const [firstName, setFirstName] = useState(profileData.firstName);
  const [lastName, setLastName] = useState(profileData.lastName);
  const [age, setAge] = useState(profileData.age);
  const [gender, setGender] = useState(profileData.gender);
  const [profilePicture, setProfilePicture] = useState(
    profileData.profilePicture,
  );
  const [bio, setBio] = useState(profileData.bio);
  const [toast , setToast] = useState(false);
  const dispatch = useDispatch();

  const saveProfile = async () => {
    const res = await axios.patch(
      BASE_URL + "profile/edit",
      { firstName, lastName, profilePicture, age, gender, bio },
      { withCredentials: true },
    );
    dispatch(addUser(res?.data?.data));
    setToast(true)
    setTimeout(() => {
       setToast(false)
    },2000)
  };

  return (
    <>
      <div className="flex justify-center items-start gap-x-16 p-4 mb-12 bg-base-200">
        <div className="card bg-base-300 shadow-xl w-full max-w-md p-6">
          <h2 className="card-title justify-center text-xl border-b-2 border-indigo-300 inline-block mb-4">
            Edit Profile
          </h2>

          <label className="label">
            <span className="label-text text-sm">First Name:</span>
          </label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input input-bordered w-full h-8 text-sm mb-1"
          />

          <label className="label">
            <span className="label-text text-sm">Last Name:</span>
          </label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input input-bordered w-full h-8 text-sm mb-1"
          />

          <label className="label">
            <span className="label-text text-sm">Photo URL:</span>
          </label>
          <input
            type="text"
            value={profilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
            className="input input-bordered w-full h-8 text-sm mb-1"
          />

          <label className="label">
            <span className="label-text text-sm">Age:</span>
          </label>
          <input
            type="text"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input input-bordered w-full h-8 text-sm mb-1"
          />

          <label className="label">
            <span className="label-text text-sm">Gender:</span>
          </label>
          <div className="dropdown w-full mb-1">
            <input
              tabIndex={0}
              className="input input-bordered w-full h-8 text-sm"
              placeholder="Select Gender"
              value={gender}
              readOnly
            />
            <ul
              tabIndex={0}
              className="dropdown-content menu p-1 shadow bg-base-100 rounded-box w-full"
            >
              <li>
                <button onClick={() => setGender("Male")}>Male</button>
              </li>
              <li>
                <button onClick={() => setGender("Female")}>Female</button>
              </li>
            </ul>
          </div>

          <label className="label">
            <span className="label-text text-sm">Bio:</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full mb-2 h-20 text-sm"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>

          <button
            className="btn btn-primary w-full h-9 text-sm mt-1"
            onClick={saveProfile}
          >
            Save
          </button>
        </div>

        <div className="w-full max-w-sm">
          <UserCard
            userData={{ firstName, lastName, profilePicture, age, gender, bio }}
          />
        </div>
      </div>
     {toast && <div className="toast toast-top toast-center">
      
        <div className="alert alert-success text-white">
          <span>Profile updated successfully</span>
        </div>
      </div>}
    </>
  );
};

export default EditProfile;
