import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditProfile from "./EditProfile";

const Profile = () => {
  const userData = useSelector((store) => store?.user);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center p-4 pb-20">
      <div className="max-w-md w-full bg-base-300 rounded-3xl overflow-hidden shadow-2xl  flex flex-col">
        <div className="px-8 pt-8 pb-4">
          <h1 className="text-4xl font-bold text-white leading-tight">
            {userData.firstName}, {userData.age}
          </h1>
        </div>

        <div className="px-8">
          <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-600 shadow-inner">
            <img
              src={userData.profilePicture}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div>
            <h3 className="text-slate-400 text-sm font-sans uppercase tracking-wide font-bold mb-2 ">
              Bio
            </h3>
            <p className="text-slate-200 text-sm leading-relaxed italic">
              "{userData.bio}"
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-slate-400 text-sm uppercase tracking-wide font-bold mb-3">
              Skills
            </h3>

            {userData?.skills && userData.skills.length > 0 ? (
              <div className="flex flex-wrap gap-2">
                {userData.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-400 rounded-lg text-md font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            ) : (
              <div className="py-2 px-4 border border-dashed border-slate-700 rounded-xl bg-slate-800/30">
                <p className="text-slate-500 text-xs italic text-center">
                  No skills added yet. Add some to stand out!
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center pt-4">
            <button
              className="w-32 bg-blue-600 text-white font-semibold py-3 rounded-full hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
              onClick={() => navigate("/profile/edit")}
            >
              Edit Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
