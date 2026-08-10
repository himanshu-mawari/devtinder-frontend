  import MobileNavbar from "../components/MobileTopbar";
  import MobileBottomBar from "../components/MobileBottomBar";
  import DesktopSidebar from "../components/DesktopSidebar";
  import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="flex min-h-screen  ">
      <aside className="hidden w-64 shrink-0 border-r  bg-sidebar border-sidebar-border [@media(min-width:900px)]:block">
        <DesktopSidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="border-b border-border md:hidden">
          <MobileNavbar />
        </header>

        <main className="flex-1 ">
     <div className="px-4 pt-4 pb-28 sm:px-6 md:p-8 2xl:p-6 w-full max-w-2xl xl:max-w-3xl mx-auto">
    <Outlet />
  </div>
        </main>

        <footer className="sidebar:hidden">
          <MobileBottomBar />
        </footer>
      </div>
    </div>
  );
};
  export default AppLayout;
