import { useGetProfileQuery } from "../services/userApi";

const useAuth = () => {
  const { data, isSuccess } = useGetProfileQuery();
  return {
    isAuthenticated: isSuccess && !!data,
    loggedInUserId: data?._id || null
  };
};

export default useAuth;
