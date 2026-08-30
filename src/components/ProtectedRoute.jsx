import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";
import useAuth from "../hooks/useAuth";
import ErrorState from "./ErrorState";

const ProtectedRoute = ({ children }) => {
  const {
    isAuthenticated,
    isLoading,
    isError,
    error,
    isFetching,
    message,
    showRetry,
  } = useAuth();

  useEffect(() => {
    if (isError && error?.status === 401) {
      toast.info("Your session expired — please log in again");
    }
  }, [isError, error?.status]);

  if (isLoading) return null;

  if (isError && error?.status === 401) {
    return <Navigate to="/login" replace />;
  }

  if (isError) {
    return (
      <ErrorState
        message={message}
        showRetry={showRetry}
        onRetry={() => window.location.reload()}
        isRetrying={isFetching}
      />
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;