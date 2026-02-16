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
    requests && (
      <div>
        <div className="w-7/12 mx-auto mt-8 mb-4">
          <h1 className="text-2xl font-semibold border-b border-base-300 pb-3 px-2">
            Pending requests
          </h1>
        </div>
        <div className="mt-4">
          {requests.map((data) => {
            const { firstName, lastName, profilePicture, bio } =
              data.fromUserId;
            return (
              <div className="mt-5 bg-base-200 w-7/12 mx-auto px-5 pb-3 pt-2 rounded-xl hover:bg-base-300 transition hover:scale-95">
                <div className="flex gap-4 items-center">
                  <img
                    src={profilePicture}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />

                  <div>
                    <div className="font-medium text-lg">
                      {firstName} {lastName}
                    </div>
                    <div className="opacity-70 text-xs line-clamp-1">{bio}</div>

                    <div className="flex gap-2 mt-3 mb-2">
                      <button
                        className="px-5 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition duration-200 active:scale-95"
                        onClick={() =>
                          handleReviewRequest("accepted", data._id)
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="px-5 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-200 active:scale-95"
                        onClick={() =>
                          handleReviewRequest("rejected", data._id)
                        }
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    )
  );
};

export default RequestPage;
