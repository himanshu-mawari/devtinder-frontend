import { useState} from "react";
import {Link , useNavigate} from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Signup = () => {
      const [email, setEmailId] = useState("");
      const [password, setPassword] = useState("");
      const [firstName, setFirstName] = useState("");
      const [lastName, setLastName] = useState("");
      const [confirmPassword, setConfirmPassword] = useState("");
      const [error, setError] = useState("");
      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleSignup = async () => {
        try{

           const user =  await axios.post(BASE_URL + "signup" , {firstName , lastName , email , password} , {withCredentials : true})
            dispatch(addUser(user?.data?.data))
            navigate("/profile")
        } catch (err){
              setError(err)
        }

      };

  return (
     <div className="flex justify-center mt-2">
      <div className="card card-border bg-base-200 w-full max-w-md p-2">
        <div className="card-body flex flex-col gap-y-5">
          <h2
            className="text-left text-3xl font-bold font-login mb-3 tracking-wide border-b-2 border-white pb-2 "
          >
         Create Your Account
          </h2>
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="First name"
              className="input input-bordered w-full text-md  "
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last name"
              className="input input-bordered w-full text-md  "
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="text"
              placeholder="email address"
              className="input input-bordered w-full text-md  "
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full text-md active:text-opacity-100 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="text"
              placeholder="password"
              className="input input-bordered w-full text-md active:text-opacity-100 "
              value={confirmPassword}
              onChange={(e) => setConfirmPassword   (e.target.value)}
            />
          </div>
          <p className="text-red-700 ml-2">{error} </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary w-full text-white font-medium text-lg "
              onClick={() => handleSignup()}
            >
              Sign up
            </button>
          </div>
          <div className="text-sm opacity-80 mt-2 text-center">
            Already have an account?{" "}
            <span className="text-[#7261f2]  hover:border-[#7261f2] pb-1 hover:border-b-2">
              <Link to="/login">Sign in</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup