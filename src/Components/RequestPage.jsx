import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect } from "react";
import { addConnectionRequests } from "../utils/requestSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RequestPage = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store?.request);

  const receivedRequests = async () => {
    const res = await axios.get(BASE_URL + "user/requests/received", {
      withCredentials: true,
    });
    dispatch(addConnectionRequests(res?.data?.data));
  };

  useEffect(() => {
    receivedRequests();
  }, []);

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

                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-lg">
                      {firstName} {lastName}
                    </div>
                    <div className="opacity-70 text-sm line-clamp-2">{bio}</div>

                    <div className="flex gap-3 mt-3">
                      <button className="btn btn-outline text-sm w-20 ">Ignore</button>
                      <button className="btn btn-primary  text-sm">Interested</button>
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
