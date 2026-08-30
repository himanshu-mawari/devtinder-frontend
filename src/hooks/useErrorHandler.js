import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "sonner";
import { getErrorConfig } from "../utils/errorConfig";
import { baseApi } from "../services/baseApi";

const useErrorHandler = (error, context, options) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const config = getErrorConfig(error, context, options);
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