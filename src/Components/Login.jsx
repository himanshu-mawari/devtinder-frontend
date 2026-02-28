import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Toast from "../components/Toast";
import { login } from "../services/authService";

const Login = () => {
  const [email, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [toast, setToast] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!email || !password) {
        setError("Email and password required");
        return;
      }

      const user = await login(email, password);
      dispatch(addUser(user.data.data));

      setToast({ message: user.data.message, type: "success" });

      setTimeout(() => {
        setToast(false);
        navigate("/");
      }, 500);
    } catch (err) {
      const errorMessage =
        err.response && err.response.data && err.response.data.message
          ? err.response.data.message
          : "Something went wrong";

      setToast({ message: errorMessage, type: "failed" });
      setTimeout(() => setToast(false), 2000);
    }
  };

  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="card bg-base-200 w-full max-w-md shadow-2xl border border-white/5">
        <div className="card-body gap-y-6">
          <h2 className="text-4xl font-bold font-login tracking-wide border-b border-white/20 pb-4">
            Welcome Back
          </h2>

          <form onSubmit={handleLogin} className="flex flex-col gap-y-4">
            <div className="form-control">
              <input
                type="email"
                placeholder="✉︎ email address"
                className="input input-bordered w-full focus:border-[#7261f2]"
                value={email}
                onChange={(e) => setEmailId(e.target.value)}
                required
              />
            </div>

            <div className="form-control relative">
              <input
                type={visibility ? "text" : "password"}
                placeholder="🔒︎ password"
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

            {error && (
              <p className="text-error text-sm ml-1 animate-pulse">
                ⚠️ {error}
              </p>
            )}

            <button
              className="btn btn-primary w-full text-white font-bold text-lg mt-2 shadow-lg"
              type="submit"
            >
              Login
            </button>
          </form>

          <div className="text-sm opacity-70 text-center mt-2">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-[#7261f2] font-semibold hover:underline decoration-2 underline-offset-4"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default Login;
