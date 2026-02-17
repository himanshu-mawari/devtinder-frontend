import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      if (email === "" && password === "") {
        setError("Email and password required");
        return;
      }

      if (!email.includes("@gmail.com")) {
        setError("Please enter a valid email address");
        return;
      }

      const user = await axios.post(
        BASE_URL + "login",
        {
          email,
          password,
        },
        { withCredentials: true }, //tells the browser to send and accept cookies or authentication credentials for cross-origin requests
      );
      dispatch(addUser(user.data));
      navigate("/");
    } catch {
      setError("Email address and password is incorrect");
    }
  };

  return (
    <div className="flex justify-center mt-16  ">
      <div className="card card-border bg-base-200 w-full max-w-md p-2">
        <div className="card-body flex flex-col gap-y-5">
          <h2
            className="text-left pb-2 text-4xl font-bold font-login mb-5 tracking-wide border-b-2 border-white "
          >
            Welcome Back
          </h2>
          <div className="flex flex-col gap-y-5">
            <input
              type="text"
              placeholder="✉︎ email address"
              className="input input-bordered w-full text-md  "
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <input
              type="text"
              placeholder="🔒︎ password"
              className="input input-bordered w-full text-md active:text-opacity-100 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-700 ml-2">{error} </p>
          <div className="card-actions justify-end">
            <button
              className="btn btn-primary w-full text-white font-medium text-lg "
              onClick={() => handleLogin()}
            >
              Login
            </button>
          </div>
          <div className="text-sm opacity-80 mt-2 text-center">
            Don't have an account?{" "}
            <span className="text-[#7261f2]  hover:border-[#7261f2] pb-1 hover:border-b-2">
              <Link to="/signup">Sign up</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
