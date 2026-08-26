import React from "react";

const Skeleton = ({ className }) => (
  <div
    className={`relative overflow-hidden bg-[#f3f3f3]   ${className}`}
  >
    <div className="absolute inset-0 -translate-x-full ">
      <div className="h-full w-full bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-[-20deg]" />
    </div>
  </div>
);

export default Skeleton;
