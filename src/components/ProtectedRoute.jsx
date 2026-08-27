import { Navigate } from "react-router-dom";
import ErrorState from "./ErrorState";
import useErrorHandler from "../hooks/useErrorHandler";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
const ProtectedRoute = ({ children }) => {
  const { user, isAuthenticated, isLoading, isError, error, isFetching } = useAuth();
  const { message, showRetry } = useErrorHandler(error, "session");

  if (isLoading) return;
  if (isError && error?.status === 401) return <Navigate to="/login" replace />;
  if (isError) return <ErrorState message={message} showRetry={showRetry} onRetry={() => window.location.reload()} isRetrying={isFetching} />;
  if (!isAuthenticated) return <Navigate to="/login" replace />;

  return children;
};
export default ProtectedRoute;
