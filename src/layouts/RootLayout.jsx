import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { socket } from "../utils/socket";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { baseApi } from "../services/baseApi";

const RootLayout = () => {
  const { isAuthenticated } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) return;

    socket.connect();
    const handleConnectionRequest = (newRequest) => {
      dispatch(
        baseApi.util.updateQueryData(
          "getConnectionRequests",
          undefined,
          (draft) => {
            if (!draft.some((r) => r._id === newRequest._id)) {
              draft.push(newRequest);
            }
          },
        ),
      );
    };
    socket.on("connect", () => console.log("socket connected:", socket.id));
    socket.on("connect_error", (err) =>
      console.log("socket connect error:", err.message),
    );

    socket.on("connectionRequestReceived", handleConnectionRequest);

    return () => {
      socket.disconnect();
      socket.off("connectionRequestReceived", handleConnectionRequest);
    };
  }, [isAuthenticated]);

  return <Outlet />;
};

export default RootLayout;
