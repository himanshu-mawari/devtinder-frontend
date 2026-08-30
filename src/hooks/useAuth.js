import { useGetProfileQuery } from "../services/userApi";
import useErrorHandler from "./useErrorHandler";
const useAuth = () => {
  const {
    data: user,
    isLoading,
    isError,
    error,
    isFetching,
  } = useGetProfileQuery();
  const { message, showRetry } = useErrorHandler(error, "session", {
    ownsRedirect: true,
  });
  const isAuthenticated = !!user && !isError;

  console.log({
    user,
    isAuthenticated,
    isLoading,
    isError,
    error,
  });

  return {
    user,
    isAuthenticated,
    isLoading,
    isError,
    error,
    isFetching,
    message,
    showRetry,
  };
};

export default useAuth;
