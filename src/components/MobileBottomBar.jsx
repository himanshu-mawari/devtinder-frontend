import { Compass, Users, MessageSquare, User } from "lucide-react";
import { NavLink } from "react-router-dom";

const MobileBottomBar = () => {

  const navItems = [
    { id: "discover", label: "Discover", icon: Compass },
    { id: "connections", label: "Connections", icon: Users },
    { id: "messages", label: "Messages", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
  ];

  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-md items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-2 backdrop-blur-md shadow-lg shadow-black/5">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.id}
              className="group relative flex flex-col items-center justify-center gap-1 p-2"
            >
              {({isActive}) => (

            <>
              {isActive && (
                <span className="absolute inset-0 rounded-xl  transition-all duration-300 ease-out" />
              )}

              <Icon
                size={22}
                className={`relative z-10 transition-all duration-300 ease-out ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 scale-110"
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
              />

              <span
                className={`relative z-10 text-[10px] font-medium tracking-wide transition-all duration-300 ease-out ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-400 "
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                {item.label}
              </span>
              </>
        )}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default MobileBottomBar;