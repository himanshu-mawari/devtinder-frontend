import MobileTopbar from "../components/MobileTopbar";
import MobileBottomBar from "../components/MobileBottomBar";
import DesktopSidebar from "../components/DesktopSidebar";
import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="flex h-[100dvh] w-full overflow-hidden">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar border-sidebar-border [@media(min-width:900px)]:block">
        <DesktopSidebar collapsed={false}/>
      </aside>

      <div className="flex-1 flex flex-col h-[100dvh] w-full overflow-hidden">
        <div className="border-b border-border sidebar:hidden shrink-0">
          <MobileTopbar />
        </div>

        <main className="flex-1 flex flex-col h-full overflow-hidden">
          <div className="px-4 pt-4 pb-6 sm:px-6 md:p-8 2xl:p-6 w-full max-w-2xl mx-auto h-full flex flex-col">
            <Outlet />
          </div>
        </main>

        <footer className="shrink-0 sidebar:hidden">
          <MobileBottomBar />
        </footer>
      </div>
    </div>
  );
};
export default AppLayout;
