import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import {
  addConnectionRequests,
  removeConnectionRequests,
} from "../utils/requestSlice";
import { useDispatch, useSelector } from "react-redux";

const RequestPage = () => {
  const dispatch = useDispatch();
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

  return (
    requests && (
      <div>
        <div className="w-7/12 mx-auto mt-8 mb-4">
          <h1 className="text-2xl font-semibold border-b border-base-300 pb-3 px-2">
            Connection requests
          </h1>
        </div>
        <div className="mt-4">
          {requests.map((data) => {
            const { firstName, lastName, profilePicture, bio } =
              data.fromUserId;
            return (
              <div className="mt-5 bg-base-200 w-7/12 mx-auto px-4 py-3 rounded-xl hover:bg-base-300 transition">
                <div className="flex gap-4 items-center">
                  <img
                    src={profilePicture}
                    className="w-20 h-20 rounded-full object-cover flex-shrink-0"
                  />

                  <div className="flex-1 ">
                    <div className="font-semibold text-lg">
                      {firstName} {lastName}
                    </div>
                    <div className="opacity-70 text-sm line-clamp-2">{bio}</div>

                    <div className="flex gap-5 mt-3">
                      <button
                        className="px-8 py-2 rounded-lg bg-blue-400 text-white hover:bg-blue-500 transition duration-200 active:scale-95"
                        onClick={() =>
                          handleReviewRequest("accepted", data._id)
                        }
                      >
                        Accept
                      </button>
                      <button
                        className="px-8 py-2 rounded-lg bg-gray-300 text-gray-800 hover:bg-gray-400 transition duration-200 active:scale-95"
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
