import { NAV_ITEMS } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-md items-center justify-between rounded-full border border-border/60 bg-background/80 px-6 py-2 backdrop-blur-md shadow-lg shadow-black/5">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.id}
              className="group relative flex flex-col items-center justify-center gap-1 p-2"
            >
              {({ isActive }) => (
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
