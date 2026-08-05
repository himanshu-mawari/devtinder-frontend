import MobileNavbar from "../components/MobileTopbar";
import MobileBottomBar from "../components/MobileBottomBar";
import DesktopSidebar from "../components/DesktopSidebar";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="flex min-h-screen">
      <aside className="hidden md:block w-72 shrink-0">
        <DesktopSidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="md:hidden">
          <MobileNavbar />
        </header>

        <main className="flex-1">
          <Outlet />
        </main>

        <footer className="md:hidden">
          <MobileBottomBar />
        </footer>
      </div>
    </div>
  );
};

export default AppLayout;
