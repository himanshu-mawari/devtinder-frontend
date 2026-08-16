import { useState } from "react";
import { NAV_ITEMS } from "../utils/constants";
import { NavLink } from "react-router-dom";
import { useGetProfileQuery } from "../services/userApi";
import { getProfileInitials } from "../utils/helpers";
import ProfileMenu from "./ProfileMenu";

const DesktopSidebar = ({ collapsed }) => {
  const desktopNavItems = NAV_ITEMS.filter((item) => !item.mobileOnly);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: user, isLoading } = useGetProfileQuery();
  if (isLoading) {
    return <p>loading...</p>;
  }

  const { firstName, lastName, username, profilePicture } = user;
  const name = firstName + " " + lastName;

  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);

  console.log(collapsed);

  return (
    <div
      className={`flex flex-col h-full bg-sidebar border-r transition-all duration-300 ${
        collapsed ? "w-16  p-2 items-center" : "w-64 p-4"
      }`}
    >
      {/* Header / Logo Section */}
      <header className="flex items-center justify-center h-12 w-full mb-4">
        {!collapsed && (
          <h1 className="font-heading flex items-center text-2xl font-black tracking-tighter leading-none select-none px-2 w-full">
            <span className="text-foreground">Dev</span>
            <span className="bg-logo bg-clip-text text-transparent ml-0.5">
              Tinder
            </span>
          </h1>
        )}
      </header>

      {/* Navigation List */}
      <nav className="flex flex-col gap-1.5 w-full">
        {desktopNavItems.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.id}
              to={item.id}
              replace
              title={collapsed ? item.label : undefined}
              className="rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {({ isActive }) => (
                <div
                  className={`flex items-center rounded-full transition-colors ${
                    collapsed ? "justify-center p-3" : "px-3.5 py-3 gap-3"
                  } ${
                    isActive
                      ? "bg-card text-foreground font-semibold shadow-sm"
                      : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                  }`}
                >
                  <Icon className="shrink-0 size-5" />
                  {!collapsed && (
                    <span className="text-sm truncate">{item.label}</span>
                  )}
                </div>
              )}
            </NavLink>
          );
        })}
      </nav>

      <div
        className={`relative mt-auto transition-colors ${
          collapsed
            ? "flex justify-center w-full py-2" // Clean avatar-only look (no bg, no border)
            : "p-2.5 border border-sidebar-border bg-sidebar-accent hover:bg-sidebar-accent-hover focus-within:ring-2 focus-within:ring-ring rounded-xl flex items-center gap-3"
        }`}
      >
        <button
          className={`flex items-center w-full  gap-3 focus:outline-none ${collapsed ? "p-0" :"p-2.5"}`}
          onClick={toggleProfileMenu}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              className=" w-12 h-12 rounded-full object-cover object-top shrink-0"
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
          {!collapsed && (
            <span className="flex flex-col items-start">
              <span className="text-sm font-semibold">
                {firstName} {lastName}
              </span>
              <span className="text-xs text-muted">@{username}</span>
            </span>
          )}
        </button>
        {isProfileMenuOpen && <ProfileMenu />}
      </div>
    </div>
  );
};

export default DesktopSidebar;
