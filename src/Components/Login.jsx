import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmailId] = useState("himanshumawari@gmail.com");
  const [password, setPassword] = useState("Himanshu@123");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
     const user =  await axios.post(
        BASE_URL + "login",
        {
          email,
          password,
        },
        { withCredentials: true }, //tells the browser to send and accept cookies or authentication credentials for cross-origin requests
      )
      dispatch(addUser(user.data));
      navigate("/")
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex justify-center   mt-20 ">
      <div className="card card-border bg-base-200 w-full max-w-md p-2">
        <div className="card-body flex flex-col gap-y-8">
          <h2 className="text-center text-2xl font-semibold">Welcome Back</h2>
          <div className="flex flex-col gap-y-3">
            <input
              type="text"
              placeholder="✉︎ email address"
              className="input input-bordered w-full text-md "
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <input
              type="text"
              placeholder="🔒︎ password"
              className="input input-bordered w-full text-md "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary w-full text-white font-normal text-lg"
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
