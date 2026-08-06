import React from "react";
import { NAV_ITEMS } from "../utils/constants";
import { NavLink } from "react-router-dom";
const DesktopSidebar = () => {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <header>
        <h1 className="font-heading  flex items-center text-3xl font-black tracking-tighter leading-none select-none px-3 py-2">
          <span className="text-foreground">Dev</span>
          <span className="bg-logo bg-clip-text text-transparent ml-0.5">
            Tinder
          </span>
        </h1>
      </header>
      <nav className="mt-6  flex  flex-col gap-1">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink to={item.id} className="flex flex-col py-0.5 font-medium">
              {({ isActive }) => {
                return (
                  <>
                    <div className={` flex gap-3 items-center text-muted px-3 py-2.5  ${isActive ? " bg-card text-text rounded-full" : ""}`}>
                      <Icon size={20} />
                      <div className="text-sm">{item.label}</div>
                    </div>
                  </>
                );
              }}
            </NavLink>
          );
        })}
      </nav>
      <div className="mt-auto border border-sidebar-border bg-background rounded-xl">
        <button className="flex items-center p-2.5 gap-3">
          <span
            className=" rounded-full text-sm w-12 h-12 flex justify-center
           items-center bg-logo font-semibold font-heading "
          >
            HM
          </span>
          <span className="flex flex-col items-start">
            <span className="text-sm font-semibold">Harsh Mawari</span>
            <span className="text-xs text-muted">@er.himanshu</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default DesktopSidebar;
