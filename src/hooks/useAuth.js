import { useGetProfileQuery } from "../services/userApi";
const useAuth = () => {
  const { data: user, isLoading, isError, error } = useGetProfileQuery();
  const isAuthenticated = !!user && !isError;
  return { user, isAuthenticated, isLoading, isError, error };
};

export default useAuth;