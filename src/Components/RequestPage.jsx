import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import {
  addConnectionRequests,
  removeConnectionRequests,
} from "../utils/requestSlice";
import { useDispatch, useSelector } from "react-redux";
 import { useNavigate } from "react-router-dom";

const RequestPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let requests = useSelector((store) => store?.request);
  const receivedRequests = async () => {
    const res = await axios.get(BASE_URL + "user/requests/received", {
      withCredentials: true,
    });
    dispatch(addConnectionRequests(res?.data?.data));
  };

  useEffect(() => {
    receivedRequests();
  }, []);

  const handleReviewRequest = async (status, reqId) => {
    try {
      await axios.post(
        BASE_URL + `request/review/${status}/${reqId}`,
        {},
        { withCredentials: true },
      );
      dispatch(removeConnectionRequests(reqId));
    } catch (err) {
      console.error(err.message);
    }
  };

    if (!requests)
    return (
      <div className="w-7/12 mx-auto mt-20 space-y-4">
        <div className="skeleton h-28 w-full rounded-xl"></div>
        <div className="skeleton h-28 w-full rounded-xl"></div>
        <div className="skeleton h-28 w-full rounded-xl"></div>
      </div>
    );


  if(!requests.length) 
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 mt-10">
      <div className="max-w-md w-full bg-base-100  p-8 text-center space-y-5">

        <div className="text-5xl">📭</div>

        <h2 className="text-2xl font-bold">
          No Pending Requests
        </h2>

        <p className="text-base-content/70">
          You don’t have any connection requests right now.
          Explore developers and send some invites.
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
            onClick={() => navigate("/connections")}
          >
            View Connections
          </button>
        </div>

      </div>
    </div>
  );


  return (
  <div className="max-w-3xl mx-auto mt-8 px-4 pb-20">
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-based-content border-b border-base-300 pb-4 px-2">
        Pending Requests
        <span className="ml-3 text-sm font-normal text-gray-500">({requests.length})</span>
      </h1>
    </div>

    <div className="flex flex-col gap-4">
      {requests.map((data) => {
        const { firstName, lastName, profilePicture, bio } = data.fromUserId;
        
        return (
          <div 
            key={data._id}
            className="group flex flex-col sm:flex-row items-center gap-5 bg-base-200 p-5 rounded-2xl hover:bg-base-300 hover:scale-[1.01] transition-all duration-200 border border-transparent hover:border-white/5"
          >
            <div className="avatar">
              <div className="w-20 h-20 rounded-full ring-2 ring-offset-base-100 ring-[#4f9cff]/20 group-hover:ring-[#4f9cff]/50 transition-all">
                <img src={profilePicture} className="object-cover" alt={firstName} />
              </div>
            </div>

            <div className="flex-1 text-center sm:text-left min-w-0">
              <h2 className="font-bold text-lg text-based-content capitalize">
                {firstName} {lastName}
              </h2>
              <p className="text-based-content text-sm line-clamp-2 italic font-light mt-1">
                {bio || "Looking to connect with developers!"}
              </p>

              <div className="flex gap-3 mt-4 justify-center sm:justify-start">
                <button
                  className="btn btn-primary btn-sm px-6 rounded-lg shadow-md shadow-primary/10"
                  onClick={() => handleReviewRequest("accepted", data._id)}
                >
                  Accept
                </button>
                <button
                  className="btn btn-outline btn-sm px-6 rounded-lg border-white/10 hover:bg-error/10 hover:border-error hover:text-error"
                  onClick={() => handleReviewRequest("rejected", data._id)}
                >
                  Reject
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  </div>
  );
};

export default RequestPage;
