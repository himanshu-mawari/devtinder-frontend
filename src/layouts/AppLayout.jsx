import MobileTopbar from "../components/MobileTopbar";
import MobileBottomBar from "../components/MobileBottomBar";
import DesktopSidebar from "../components/DesktopSidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="flex h-[100dvh] w-full overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar border-sidebar-border [@media(min-width:900px)]:block">
        <DesktopSidebar />
      </aside>

      {/* Added flex-1 and w-full so this column fills the remaining desktop space */}
      <div className="flex-1 flex flex-col h-[100dvh] w-full overflow-hidden">
        {/* Added shrink-0 so the topbar never compresses */}
        <div className="border-b border-border md:hidden shrink-0">
          <MobileTopbar />
        </div>

        {/* 
      1. Removed overflow-y-auto. 
      2. Added flex, flex-col, and h-full to pass height down. 
    */}
        <main className="flex-1 flex flex-col h-full overflow-hidden">
          {/* Added flex, flex-col, and h-full here too */}
          <div className="px-4 pt-4 pb-6 sm:px-6 md:p-8 2xl:p-6 w-full max-w-2xl mx-auto h-full flex flex-col">
            <Outlet />
          </div>
        </main>

        {/* Added shrink-0 so the bottom bar never compresses */}
        <footer className="shrink-0 [@media(min-width:900px)]:hidden">
          <MobileBottomBar />
        </footer>
      </div>
    </div>
  );
};
export default AppLayout;
