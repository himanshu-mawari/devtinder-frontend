import React from "react";
import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <main
      className="  min-h-dvh  relative flex flex-col p-4 sm:p-6 md:p-8 xl:p-10 2xl:px-7 2xl:py-5 overflow-y-hidden
    "
    >
      <Outlet />
    </main>
  );
};

export default AuthLayout;
