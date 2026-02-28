import { useState } from "react";
import Toast from "./Toast";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getChangePassword } from "../services/userService";

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError("");
    try {
      if (!oldPassword || !newPassword) {
        setError("old and new password required");
        return;
      }

      if (newPassword.length < 6) {
        setError("New password length minimum be 6");
        return;
      }

      const user = await getChangePassword(oldPassword, newPassword);
      setToast({ messagge: user.data.message, type: "success" });
      setTimeout(() => {
        setToast(false);
      }, 2000);
      setOldPassword("");
      setNewPassword("");
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };
  return (
    <div className="flex justify-center mt-16 px-4">
      <div className="card bg-base-200 w-full max-w-md shadow-2xl border border-white/5">
        <div className="card-body gap-y-6">
          <h2 className="text-4xl font-bold font-login tracking-wide border-b border-white/20 pb-4">
            Change Password
          </h2>

          <form
            onSubmit={handleChangePassword}
            className="flex flex-col gap-y-4"
          >
            <div className="form-control relative">
              <input
                type={showOld ? "text" : "password"}
                placeholder="🔒︎ Old password"
                className="input input-bordered w-full pr-12 focus:border-[#7261f2]"
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value);
                  setError("");
                }}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  setShowOld(true);
                }}
              >
                {showOld ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="form-control relative">
              <input
                type={showNew ? "text" : "password"}
                placeholder="🔒︎ New password"
                className="input input-bordered w-full pr-12 focus:border-[#7261f2]"
                value={newPassword}
                onChange={(e) => {
                  setNewPassword(e.target.value);
                  setError("");
                }}
                required
              />
              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xl opacity-50 hover:opacity-100 transition-opacity"
                onClick={() => {
                  setShowNew(true);
                }}
              >
                {showNew ? <FaEye /> : <FaEyeSlash />}
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
              Confirm
            </button>
          </form>
        </div>
      </div>
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};

export default ChangePassword;
