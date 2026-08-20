import { Outlet, useParams } from "react-router-dom";
import DesktopSidebar from "../components/DesktopSidebar";
import ChatList from "../components/ChatList";
const ChatLayout = () => {
  const { userId } = useParams();


  return (
    <div className="flex h-[100dvh] w-full overflow-hidden ">
      <aside className="hidden sidebar:flex flex-col w-16  shrink-0 border-r bg-sidebar">
        <DesktopSidebar collapsed={true} />
      </aside>

      <section
        className={`w-full sidebar:w-80 lg:w-[360px] 2xl:w-[420px] shrink-0 border-r flex flex-col h-full bg-background ${
          userId ? "hidden sidebar:flex" : "flex"
        }`}
      >
        <div className="px-4 pt-4 pb-6 sm:px-6 md:p-8 2xl:p-6 w-full mx-auto h-full">
          <ChatList />
        </div>
      </section>

      <main
        className={`flex-1 h-full overflow-hidden bg-background px-4 pt-4 pb-6 sm:px-6 md:p-8 2xl:p-6 mx-auto  ${
          userId ? "flex flex-col" : "hidden sidebar:flex sidebar:flex-col"
        }`}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default ChatLayout;
