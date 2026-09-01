import { NAV_ITEMS } from "../utils/constants";
import { NavLink } from "react-router-dom";

const MobileBottomBar = () => {
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex justify-center px-4 ">
      <nav className="flex w-full max-w-xl items-center justify-around rounded-full border border-border  px-6 py-2 backdrop-blur bg-opacity-90 bg-background">
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className="group relative flex flex-col items-center justify-center gap-1 p-2"
            >
              {({ isActive }) => (
                <>
                  {isActive && (
                    <span className="absolute inset-0 rounded-xl  transition-all duration-300 ease-out" />
                  )}

                  <Icon
                    className={`relative z-10 transition-all duration-300 ease-out  ${
                      isActive ? "text-primary" : "text-muted"
                    }`}
                  />

                  <span
                    className={`relative z-10 text-[11px] font-medium  transition-all duration-300 ease-out ${
                      isActive ? "text-primary " : "text-muted"
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
