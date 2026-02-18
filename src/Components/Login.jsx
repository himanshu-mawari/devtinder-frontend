import axios from "axios";
import { useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  

  const handleLogin = async (e) => {
    e.preventDefault();
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
        <div className="card-body flex flex-col gap-y-4">
          <h2 className="text-left pb-2 text-4xl font-bold font-login mb-5 tracking-wide border-b-2 border-white ">
            Welcome Back
          </h2>
          <form
            onSubmit={handleLogin}
            className="flex flex-col gap-y-5 relative"
          >
            <input
              type="type"
              placeholder="✉︎ email address"
              className="input input-bordered w-full text-md  "
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
            />

            <input
              type={visibility ? "text" : "password"}
              placeholder="🔒︎ password"
              className=" input input-bordered w-full text-md active:text-opacity-100 "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="absolute top-[5.2rem] right-5 text-lg  "
              onClick={() => {
                setVisibility(!visibility);
                setTimeout(() => {
                  setVisibility(false);
                }, 3000);
              }}
            >
              {visibility ? <FaEye /> : <FaEyeSlash />}
            </button>
            <button
              className="btn btn-primary w-full text-white font-medium text-lg "
              type="submit"
            >
              Login
            </button>
          </form>

          <p className="text-red-700 ml-2">{error} </p>
          <div className="card-actions justify-end"></div>
          <div className="text-sm opacity-80 text-center">
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
