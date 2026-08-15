import { useState } from "react";
import { NAV_ITEMS } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { useGetProfileQuery } from "../services/userApi";
import { getProfileInitials } from "../utils/helpers";
import ProfileMenu from "./ProfileMenu";

const DesktopSidebar = () => {
  const desktopNavItems = NAV_ITEMS.filter((item) => !item.mobileOnly);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: user, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }

  const { firstName, lastName, username, profilePicture } = user;
  const name = firstName + " " + lastName;

  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

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
        {desktopNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              to={item.id}
              className="flex flex-col py-0.5 font-medium rounded-full focus-visible:ring-2 "
            >
              {({ isActive }) => {
                return (
                  <>
                    <div
                      className={` flex gap-3 items-center text-muted px-3 py-2.5  ${isActive ? " bg-card text-text rounded-full" : ""}`}
                    >
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
      <div className="relative mt-auto border border-sidebar-border bg-sidebar-accent  hover:bg-sidebar-accent-hover focus-within:ring-2 focus-within:ring-ring rounded-xl">
        <button
          className="flex items-center w-full p-2.5 gap-3 focus:outline-none"
          onClick={toggleProfileMenu}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              className=" w-12 h-12 rounded-full object-cover object-top"
              placeholder="profile picture"
            />
          ) : (
            <span
              className=" rounded-full text-sm text-white w-12 h-12 flex justify-center
           items-center bg-logo font-semibold font-heading "
            >
              {getProfileInitials(name.toUpperCase())}
            </span>
          )}
          <span className="flex flex-col items-start">
            <span className="text-sm font-semibold">
              {firstName} {lastName}
            </span>
            <span className="text-xs text-muted">@{username}</span>
          </span>
        </button>
        {isProfileMenuOpen && <ProfileMenu />}
      </div>
    </div>
  );
};

export default DesktopSidebar;
