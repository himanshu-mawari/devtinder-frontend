import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [visibility, setVisibility] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignup = async () => {
    try {
      const user = await axios.post(
        BASE_URL + "signup",
        { firstName, lastName, email, password },
        { withCredentials: true },
      );
      dispatch(addUser(user?.data?.data));
      navigate("/profile");
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="card bg-base-200 w-full max-w-md shadow-2xl border border-white/5">
        <div className="card-body gap-y-6">
          <h2 className="text-left text-3xl font-bold font-login tracking-wide border-b border-white/20 pb-3">
            Create Your Account
          </h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignup();
            }}
            className="flex flex-col gap-y-4"
          >
            <div className="flex flex-col gap-y-4 sm:flex-row sm:gap-x-2">
              <input
                type="text"
                placeholder="First name"
                className="input input-bordered w-full focus:border-[#7261f2] focus:ring-1 focus:ring-[#7261f2]"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Last name"
                className="input input-bordered w-full focus:border-[#7261f2] focus:ring-1 focus:ring-[#7261f2]"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                required
              />
            </div>

            <input
              type="email"
              placeholder="email address"
              className="input input-bordered w-full focus:border-[#7261f2] focus:ring-1 focus:ring-[#7261f2]"
              value={email}
              onChange={(e) => setEmailId(e.target.value)}
              required
            />
            <div className="form-control relative">
              <input
                type={visibility ? "text" : "password"}
                placeholder="password"
                className="input input-bordered w-full pr-12 focus:border-[#7261f2]"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  setVisibility(true);
                  setTimeout(() => setVisibility(false), 3000);
                }}
              >
                {visibility ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div className="form-control relative">
              <input
                type={visibility ? "text" : "password"}
                placeholder="Confirm password"
                className="input input-bordered w-full pr-12 focus:border-[#7261f2]"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="text-[10px] text-error absolute -bottom-6 left-1 uppercase tracking-tighter">
                  Passwords do not match
                </p>
              )}
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  setVisibility(true);
                  setTimeout(() => setVisibility(false), 3000);
                }}
              >
                {visibility ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            {error && (
              <p className="text-error text-sm font-medium animate-in fade-in slide-in-from-left-1 mt-2">
                ⚠️ {error}
              </p>
            )}

            <div className="card-actions mt-2">
              <button
                type="submit"
                className="btn btn-primary w-full text-white font-bold text-lg shadow-lg active:scale-95 transition-transform"
              >
                Sign up
              </button>
            </div>
          </form>

          <div className="text-sm opacity-70 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#7261f2] font-semibold hover:underline underline-offset-4 transition-all"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
