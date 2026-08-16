import { Outlet, useParams } from "react-router-dom";
import DesktopSidebar from "../components/DesktopSidebar";

const ChatLayout = () => {
  const { userId } = useParams(); // Checks if a chat is active (/messages/:id)

  return (
    <div className="flex h-[100dvh] w-full overflow-hidden ">
      <aside className="hidden md:flex flex-col w-16  shrink-0 border-r bg-sidebar">
        <DesktopSidebar collapsed={true} />
      </aside>

      <section
        className={`w-full md:w-80 lg:w-[360px] shrink-0 border-r flex flex-col h-full bg-background ${
          userId ? "hidden md:flex" : "flex"
        }`}
      >
        <p>Chat list</p>
      </section>

      <main
        className={`flex-1 h-full overflow-hidden bg-background ${
          userId ? "flex flex-col" : "hidden md:flex md:flex-col"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default ChatLayout;
