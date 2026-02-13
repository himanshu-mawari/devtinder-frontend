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

  if (!connections) return(
    <div className="w-7/12 mx-auto mt-20 space-y-4">
      <div className="skeleton h-28 w-full rounded-xl"></div>
      <div className="skeleton h-28 w-full rounded-xl"></div>
      <div className="skeleton h-28 w-full rounded-xl"></div>
    </div>
  );

  if (!connections.length) return <div className="mt-64 flex-col flex items-center justify-center gap-4">
  <div className="text-xl font-medium">No Connections</div>

  <button className="btn btn-primary text-white text-lg px-10 py-2" onClick={() => navigate("/")}>
    Discover devs
  </button>
</div>


  return (
    <div>
      <div className="w-7/12 mx-auto mt-8 mb-4">
        <h1 className="text-2xl font-semibold border-b border-base-300 pb-3 px-2">
          Your Connections
        </h1>
      </div>
      <div className="mt-4">
        {connections.map((data) => {
          const { firstName, lastName, profilePicture, bio } = data;
          return (
            <div className="flex justify-center mt-3">
              <div className="flex items-center gap-4 bg-base-200 w-7/12 mx-auto px-8 py-3 rounded-xl cursor-pointer hover:scale-95 hover:bg-base-300 transition">

                <img
                  src={profilePicture}
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                />

                <div className="min-w-0">
                  <div className="font-semibold text-lg">
                    {firstName} {lastName}
                  </div>

                  <div className="opacity-70 text-sm line-clamp-2">{bio}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
