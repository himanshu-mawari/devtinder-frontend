import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getErrorConfig } from "../utils/errorConfig";
import { useEffect, useRef } from "react";
import { toast } from "sonner";
import { baseApi } from "../services/baseApi";

const useErrorHandler = (error, context) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const config = getErrorConfig(error, context);
  const hasHandledSessionExpiry = useRef(false);

  useEffect(() => {
    if (config.redirect && !hasHandledSessionExpiry.current) {
      hasHandledSessionExpiry.current = true;
      toast.info("Your session expired — please log in again");
      dispatch(baseApi.util.resetApiState());
      navigate(config.redirect);
    }
  }, [config.redirect, navigate, dispatch]);

  return config;
};

export default useErrorHandler;
