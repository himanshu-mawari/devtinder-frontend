import { useGetProfileQuery } from "../services/userApi";
import { useErrorHandler } from "./useErrorHandler";
export const useAuth = () => {
  const { data: user, isLoading, isError, error, isFetching } = useGetProfileQuery();
  const { message, showRetry } = useErrorHandler(error, "session", { ownsRedirect: true });
  const isAuthenticated = !!user && !isError;
  return { user, isAuthenticated, isLoading, isError, error, isFetching, message, showRetry };
};