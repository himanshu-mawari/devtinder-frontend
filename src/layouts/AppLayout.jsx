  import MobileNavbar from "../components/MobileTopbar";
  import MobileBottomBar from "../components/MobileBottomBar";
  import DesktopSidebar from "../components/DesktopSidebar";
  import { Outlet } from "react-router-dom";
const AppLayout = () => {
  return (
    <div className="flex min-h-screen ">
      <aside className="hidden w-64 shrink-0 border-r border-border bg-sidebar border-sidebar-border md:block">
        <DesktopSidebar />
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="border-b border-border md:hidden">
          <MobileNavbar />
        </header>

        <main className="flex-1 ">
          <div className="px-4 pt-6 pb-28 md:ml-64 md:px-8 md:pt-8 md:pb-12 max-w-5xl">

          <Outlet />
          </div>
        </main>

        <footer className="md:hidden">
          <MobileBottomBar />
        </footer>
      </div>
    </div>
  );
};
  export default AppLayout;
