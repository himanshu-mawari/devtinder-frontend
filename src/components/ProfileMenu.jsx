import { Moon, LogOut } from "lucide-react";
import { getProfileInitials } from "../utils/helpers";
import { useGetProfileQuery } from "../services/userApi";
import { useLogoutMutation } from "../services/authApi";
import { useNavigate } from "react-router-dom";

const ProfileMenu = ({ toggleProfileMenu }) => {
  const { data: user, isLoading } = useGetProfileQuery();
  const [logout] = useLogoutMutation();
  const navigate = useNavigate();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  const { firstName, lastName, profilePicture, username } = user;
  const name = firstName + " " + lastName;

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div
      className="fixed 
    top-14 right-4
    md:top-auto md:right-auto
     md:bottom-28 md:left-2 h-fit self-start
     w-60 z-50 rounded-xl border border-border bg-popover text-popover-foreground p-4 shadow-lg backdrop-blur-md animate-in fade-in-0 zoom-in-95"
    >
      {/* Header: User Info */}
      <div className="flex items-center gap-3 pb-3 border-b border-border">
        <div
          onClick={() => {
            navigate("/profile");
            toggleProfileMenu();
          }}
        >
          {profilePicture ? (
            <img
              src={profilePicture}
              className="w-10 h-10 rounded-full object-cover object-top cursor-pointer"
            />
          ) : (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-logo text-white font-semibold cursor-pointer">
              {getProfileInitials(name.toUpperCase())}
            </div>
          )}
        </div>
        <div className="flex flex-col truncate">
          <h2 className="text-sm font-semibold leading-none text-foreground truncate">
            {name}
          </h2>
          <p className="text-xs text-muted-foreground truncate mt-1">
            @{username}
          </p>
        </div>
      </div>

      {/* Navigation / Actions */}
      <div className="pt-2 flex flex-col gap-1 text-sm font-medium">
        <button className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors">
          <Moon className="h-4 w-4" />
          <span>Theme</span>
        </button>

        <button
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-destructive hover:bg-destructive/10 transition-colors"
          onClick={() => handleLogout()}
        >
          <LogOut className="h-4 w-4" />
          <span>Log out</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileMenu;
