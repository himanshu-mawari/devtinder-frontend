import React from "react";
import { useGetProfileQuery } from "../services/profileApi";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({children}) => {
  const { data:user, isLoading, isError} = useGetProfileQuery();
  if (isLoading) return <p>Loading</p>;

  console.log("im inside the protected route and luckily im execute 😋😁")

  console.log(Boolean(!user))
  console.log(isError)
  if(!user || isError){
    return <Navigate to="/login" replace />
  }
  return children;
};

export default ProtectedRoute;
