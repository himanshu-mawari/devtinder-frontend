import { useState } from "react";
import { getProfileInitials } from "../utils/helpers";
import { useGetProfileQuery } from "../services/userApi";
import ProfileMenu from "./ProfileMenu";

const MobileTopbar = () => {
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const { data: user, isLoading } = useGetProfileQuery();
  if (isLoading) return <p>loading..</p>;
  const { firstName, lastName, profilePicture } = user;
  const name = firstName + " " + lastName;

  const toggleProfileMenu = () => setIsProfileMenuOpen((prev) => !prev);
  console.log("mobiletopbar :" + profilePicture)
  return (
    <>
      <header className="sticky top-0 z-40 flex h-16 w-full items-center justify-between border-b border-border bg-background/85 px-4 backdrop-blur-md transition-all">
        <h1 className="flex items-center text-3xl font-black font-heading tracking-tighter leading-none select-none">
          <span className="text-foreground">Dev</span>
          <span className="ml-0.5 bg-logo bg-clip-text text-transparent">
            Tinder
          </span>
        </h1>
        <div
        className="cursor-pointer"
          onClick={toggleProfileMenu}
        >
          {profilePicture ? (
            <img src={profilePicture} className="w-10 h-10 rounded-full object-cover object-top" />
          ) : (
            <button
              type="button"
              className=" flex h-10 w-10  items-center justify-center rounded-full bg-logo font-heading font-semibold text-sm text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {getProfileInitials(name.toUpperCase())}
            </button>
          )}
        </div>
      </header>
      {isProfileMenuOpen && <ProfileMenu />}
    </>
  );
};

export default MobileTopbar;
