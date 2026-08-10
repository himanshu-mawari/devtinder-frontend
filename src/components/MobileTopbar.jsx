import React from "react";

const MobileTopbar = () => {
  return (

    <header>
      <h1 className="font-heading  bg-background/85 text-3xl font-black tracking-tighter leading-none select-none sticky top-0 z-40 flex h-16 w-full items-center justify-center border-b border-border transition-all">
        <span className="text-foreground">Dev</span>
        <span className="bg-logo bg-clip-text text-transparent ml-0.5">
          Tinder
        </span>
      </h1>
    </header>
  );
};

export default MobileTopbar;