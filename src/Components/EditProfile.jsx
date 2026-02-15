import { useState } from "react";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import { checkImageUrl } from "../utils/imageCheck";

export const EditProfile = ({ profileData }) => {
  const [firstName, setFirstName] = useState(profileData.firstName);
  const [lastName, setLastName] = useState(profileData.lastName);
  const [age, setAge] = useState(profileData.age);
  const [gender, setGender] = useState(profileData.gender);
  const [profilePicture, setProfilePicture] = useState(
    profileData.profilePicture,
  );

  const [bio, setBio] = useState(profileData.bio);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  console.log(error);
  const saveProfile = async () => {
    const newErrors = {};

    const ok = await checkImageUrl(profilePicture);

    if (!ok) {
      newErrors.profilePicture = "Image URL is broken";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    const res = await axios.patch(
      BASE_URL + "profile/edit",
      { firstName, lastName, profilePicture, age, gender, bio },
      { withCredentials: true },
    );
    dispatch(addUser(res?.data?.data));
    setToast(true);
    setTimeout(() => {
      setToast(false);
    }, 2000);
  };

  return (
    <>
      <div className="flex justify-center items-start gap-x-16 p-4 pb-10 mb-12">
        <div className="card bg-base-300 shadow-xl w-full max-w-md p-6">
          <h2 className="card-title justify-center text-xl border-b-2 border-indigo-300 inline-block mb-4 pb-2">
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
            className={`input input-bordered w-full h-8 text-sm mb-1 ${
              error.profilePicture ? "border-b-2 border-red-600" : ""
            }`}
          />

          <label className="label">
            <span className="label-text text-sm">Age:</span>
          </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="input input-bordered w-full h-8 text-sm mb-1"
            onKeyDown={(e) => {
              if (["e", "E", "+", "-"].includes(e.key)) {
                e.preventDefault();
              }
            }}
          />
          <label className="label">
            <span className="label-text text-sm ">Gender:</span>
          </label>
          <select
            className="select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option disabled={true} value="">
              Select your gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>

          <label className="label">
            <span className="label-text text-sm">Bio:</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full mb-2 h-20 text-sm"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <p className="text-red-600">{error.profilePicture}</p>
          <button
            className="btn btn-primary w-full h-9 text-lg text-white mt-1"
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
      {toast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success text-white">
            <span>Profile updated successfully</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
