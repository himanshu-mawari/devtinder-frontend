import { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { addUser } from "../utils/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkImageUrl } from "../utils/imageCheck";
import Toast from "../components/Toast";

export const EditProfile = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState("");
  const userData = useSelector((store) => store?.user);

  const [skillInput, setSkillInput] = useState("");
  const [toast, setToast] = useState(false);
  const [error, setError] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userData) return;
    setFirstName(userData?.firstName || "");
    setLastName(userData?.lastName || "");
    setAge(userData?.age || "");
    setGender(userData?.gender || "");
    setProfilePicture(userData?.profilePicture || "");
    setSkills(userData?.skills || []);
    setBio(userData?.bio || []);
  }, [userData]);

  const saveProfile = async () => {
    const newErrors = {};
    setError({}); 

    const ok = await checkImageUrl(profilePicture);
    if (!ok) newErrors.profilePicture = "Image URL is broken";
    if (age && age < 18) newErrors.age = "You must be at least 18 yrs old";
    if (age > 70) newErrors.age = "Your age must be between 18 - 70";

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
      return;
    }

    try {
      const res = await axios.patch(
        BASE_URL + "profile/edit",
        { firstName, lastName, profilePicture, age, gender, bio, skills },
        { withCredentials: true },
      );

      dispatch(addUser(res?.data?.data));

      setToast(true);
      setToastMessage(res?.data?.message || "Profile updated successfully");
      setToastType("success");
      setTimeout(() => setToast(false), 2000);
    } catch (err) {
      const message =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Something went wrong";

      setToast(true);
      setToastMessage(message);
      setToastType("failed");
      setTimeout(() => setToast(false), 3000);
    }
  };

  const handleAddSkill = () => {
    const cleaned = skillInput.trim().toLowerCase();

    if (cleaned.length < 2) return;

    if (skills.includes(cleaned)) {
      alert("Skill already added");
      return;
    }

    if (skills.length >= 20) {
      alert("Max 20 skills allowed");
      return;
    }

    setSkills([...skills, cleaned]);
    setSkillInput("");
  };

  const handleRemoveSkill = async (skillToRemove) => {
    const previousSkill = skills;
    try {
      setSkills((prev) => prev.filter((skill) => skill !== skillToRemove));

      await axios.patch(
        BASE_URL + "profile/remove/skill",
        { removeSkill: skillToRemove },
        { withCredentials: true },
      );
    } catch (err) {
      setSkills(previousSkill);
      setError(err.message);
    }
  };

  if (!userData) return null;

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
            <option value="other">Other</option>
          </select>
          {gender === "" && <p class="text-xs mt-1 text-red-500">Please select a gender</p>}

          <label className="label">
            <span className="label-text text-sm">Skills: </span>
          </label>
          <div>
            <div className="flex items-center gap-2 w-full">
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAddSkill()}
                className="input input-bordered flex-1 h-9 text-sm"
                placeholder="Add a skill"
              />

              <button
                onClick={handleAddSkill}
                className="btn btn-primary  px-4 btn-sm"
              >
                Add
              </button>
            </div>
            {skills.length > 0 && (
              <div className="border p-3 rounded-xl my-3">
                <div className="flex flex-wrap  gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill}
                      className="badge badge-outline badge-lg gap-2"
                    >
                      {skill}
                      <button
                        className="text-xs"
                        onClick={() => handleRemoveSkill(skill)}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <label className="label">
            <span className="label-text text-sm">Bio:</span>
          </label>
          <textarea
            className="textarea textarea-bordered w-full mb-2 h-20 text-sm"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
          <p className="text-red-600">{error.profilePicture}</p>
          <p className="text-red-600">{error.age}</p>
          <button
            className="btn btn-primary w-full h-9 text-lg text-white mt-1"
            onClick={saveProfile}
          >
            Save
          </button>
        </div>

        <div className="w-full max-w-sm">
          <UserCard
            userData={{
              firstName,
              lastName,
              profilePicture,
              age,
              gender,
              bio,
              skills,
            }}
          />
        </div>
        {toast && <Toast message={toastMessage} type={toastType}/>}
      </div>
    </>
  );
};

export default EditProfile;
