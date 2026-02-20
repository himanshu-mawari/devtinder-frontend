import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addConnection } from "../utils/connectionSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store?.connection);
  const navigate = useNavigate();

  const getConnection = async () => {
    const res = await axios.get(BASE_URL + "user/connections", {
      withCredentials: true,
    });
    dispatch(addConnection(res?.data?.data));
  };

  useEffect(() => {
    getConnection();
  }, []);

  if (!connections)
    return (
      <div className="w-7/12 mx-auto mt-20 space-y-4">
        <div className="skeleton h-28 w-full rounded-xl"></div>
        <div className="skeleton h-28 w-full rounded-xl"></div>
        <div className="skeleton h-28 w-full rounded-xl"></div>
      </div>
    );

  if (!connections.length)
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="bg-base-100  rounded-2xl p-10 max-w-md w-full text-center space-y-5">
          <div className="text-5xl">🤝</div>

          <h2 className="text-2xl font-bold">No Connections Yet</h2>

          <p className="text-base-content/70">
            You haven’t connected with any developers. Start exploring and send
            a few requests.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              className="btn btn-primary px-5 text-lg font-normal tracking-tighter"
              onClick={() => navigate("/")}
            >
              Discover Devs
            </button>

            <button
              className="btn btn-outline px-5 text-lg font-normal tracking-tighter"
              onClick={() => navigate("/request")}
            >
              View Requests
            </button>
          </div>
        </div>
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto mt-8 px-4 pb-20">
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-white border-b border-base-300 pb-4 px-2">
          Your Connections
          <span className="ml-3 text-sm font-normal text-gray-500">
            ({connections.length})
          </span>
        </h1>
      </div>

      <div className="flex flex-col gap-3">
        {connections.map((data) => {
          const { firstName, lastName, profilePicture, bio, _id } = data;
          return (
            <div
              key={_id}
              className="flex items-center gap-5 bg-base-200 p-4 rounded-2xl cursor-pointer hover:bg-base-300 hover:scale-[1.01] transition-all duration-200 border border-transparent hover:border-white/5"
            >
              <div className="avatar">
                <div className="w-16 h-16 rounded-full ring-2 ring-offset-base-100 ring-[#4f9cff]/30">
                  <img
                    src={profilePicture}
                    className="object-cover"
                    alt={firstName}
                  />
                </div>
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-lg text-white truncate">
                  {firstName} {lastName}
                </h2>
                <p className="text-gray-400 text-sm line-clamp-1 italic font-light">
                  {bio || "No bio provided"}
                </p>
              </div>

              <div className="dropdown dropdown-left">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle text-gray-400 hover:text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1" />
                    <circle cx="12" cy="5" r="1" />
                    <circle cx="12" cy="19" r="1" />
                  </svg>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-base-100 rounded-box z-[1] w-48 p-2 shadow-xl border border-white/5"
                >
                  <li>
                    <a className="text-error hover:bg-error/10 font-medium">
                      Remove connection
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
