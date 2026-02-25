import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { removeFeed } from "../utils/feedSlice";
import { useDispatch } from "react-redux";

const UserCard = ({ userData }) => {
  const { firstName, bio, age, profilePicture, skills, _id } = userData;
  const dispatch = useDispatch();
  console.log(userData)

  const handleSendRequest = async (status, userId) => {
    await axios.post(
      BASE_URL + `request/send/${status}/${userId}`,
      {},
      { withCredentials: true },
    );
    dispatch(removeFeed(userId));
  };

  return (
    <div className="flex justify-center mt-3 px-4">
      <div className="relative w-full max-w-[24rem] h-[36rem] rounded-[2rem] overflow-hidden shadow-2xl border border-white/5 group">
        <img
          src={profilePicture || null}
          alt="profile"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

        <div className="absolute bottom-0 p-6 pb-6 text-white w-full space-y-4">
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl font-bold tracking-tight">{firstName}</h2>
            {age && (
              <span className="text-xl font-light opacity-80">{age}</span>
            )}
          </div>

          <div className="flex items-start gap-2 text-sm">
            <span className="mt-0.5">📝</span>
            <p className="line-clamp-2 text-white/80  italic">
              {bio || "Looking for a coding partner!"}
            </p>
          </div>

          {skills && (
            <div className="flex flex-wrap gap-2">
              {skills?.slice(0, 2).map((skill, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-[10px] uppercase font-bold bg-white/10 backdrop-blur-md rounded-full border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              className="h-12 rounded-2xl btn bg-neutral-800 hover:bg-neutral-700 border-none text-white text-lg font-bold transition-all active:scale-95"
              onClick={() => handleSendRequest("ignored", _id)}
            >
              Ignore
            </button>
            <button
              className="h-12 rounded-2xl btn bg-[#4f9cff] hover:bg-[#3b82f6] border-none text-white text-lg font-bold shadow-lg shadow-blue-500/20 transition-all active:scale-95"
              onClick={() => handleSendRequest("interested", _id)}
            >
              Interested
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
