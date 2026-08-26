import { useState } from "react";
import { getProfileInitials } from "../utils/helpers";
import { EllipsisVertical } from "lucide-react";
import {
  useGetConnectionsQuery,
  useGetConnectionRequestsQuery,
  useReviewConnectionRequestsMutation,
} from "../services/connectionApi";
import ConnectionRequestSkeleton from "../components/ConnectionRequestSkeleton";
import ConnectionCardSkeleton from "../components/ConnectionCardSkeleton";
import ConnectionRequestEmptyState from "../components/ConnectionRequestEmptyState";

const Connections = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
  };

  const { data: connections, isLoading: isConnectionsLoading } =
    useGetConnectionsQuery();
  const { data: connectionRequests, isLoading: isRequestsLoading } =
    useGetConnectionRequestsQuery();
  const [reviewConnectionRequests] = useReviewConnectionRequestsMutation();

  const handleRequest = async (action, requestId) => {
    try {
      const data = { action, requestId };
      await reviewConnectionRequests(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  console.log(Boolean(0))

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <header className="shrink-0">
        <div>
          <h1 className="font-heading text-2xl md:text-3xl 2xl:text-2xl  font-semibold md:font-bold tracking-tight">
            Connections
          </h1>
          <p className="text-sm md:text-base 2xl:text-sm tracking-tight text-muted mt-1.5">
            New requests to review, and connections you've already made.
          </p>
        </div>
      </header>

      <article className="mt-6 mb-4 shrink-0">
        <div className="flex items-center gap-3 text-base font-semibold tracking-tight ">
          <button
            className={` text-[12px] ${activeTab === "Pending" ? "text-text" : "text-muted-foreground"} flex gap-1  transition-color hover:text-text uppercase`}
            onClick={() => handleActiveTab("Pending")}
          >
            Pending
            {isRequestsLoading ? (
              <p>(0)</p>
            ) : (
              <p> ({connectionRequests.length})</p>
            )}
          </button>

          <span className="text-muted font-light">/</span>

          <button
            className={` text-[12px] ${activeTab === "Connected" ? "text-text " : "text-muted-foreground"} flex gap-1 hover:text-text transition-colors uppercase`}
            onClick={() => handleActiveTab("Connected")}
          >
            Connected
            {isConnectionsLoading ? <p>(0)</p> : <p> ({connections.length})</p>}
          </button>
        </div>
      </article>

      <main className="flex flex-1 flex-col gap-3 mb-24 lg:mb-0 pr-2 sidebar:mb-2 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {activeTab === "Pending" &&
          (isRequestsLoading ? (
            <ConnectionRequestSkeleton />
          ) : (
            !connectionRequests.length ? <ConnectionRequestEmptyState /> :
            <>
              {connectionRequests.map((data) => (
                <div className="bg-card border border-border w-full p-4 rounded-3xl flex items-start md:items-center gap-4">
                  {data?.fromUserId?.profilePicture ? (
                    <img
                      src={data?.fromUserId?.profilePicture}
                      placeholder="profile picture"
                      className="w-14 md:w-16 md:h-16 h-14 rounded-full object-cover object-top"
                    />
                  ) : (
                    <span
                      className="flex-shrink-0 flex justify-center items-center text-sm font-heading font-bold tracking-tight text-primary-foreground w-14 md:w-16 md:h-16 h-14  rounded-full"
                      style={{ background: "var(--gradient-logo)" }}
                    >
                      {getProfileInitials(
                        data?.fromUserId?.firstName +
                          " " +
                          data?.fromUserId?.lastName,
                      )}
                    </span>
                  )}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                    <div>
                      <p className="font-semibold  text-sm truncate">
                        {data?.fromUserId?.firstName +
                          " " +
                          data?.fromUserId?.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {data?.fromUserId?.role}
                      </p>
                    </div>

                    <div className="flex gap-2 mt-3 md:mt-0">
                      <button
                        className="bg-primary text-primary-foreground h-8 px-3  text-xs rounded-xl  font-medium transition-all active:scale-95 transform-gpu shadow hover:opacity-90"
                        onClick={() => handleRequest("accepted", data._id)}
                      >
                        Accept
                      </button>
                      <button
                        className="bg-sidebar-accent text-text h-8 px-3 rounded-xl   text-xs font-medium transition-all active:scale-95 transform-gpu hover:bg-accent hover:text-accent-foreground shadow-sm"
                        onClick={() => handleRequest("rejected", data._id)}
                      >
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ))}

        {activeTab === "Connected" &&
          (isConnectionsLoading ? (
            <ConnectionCardSkeleton />
          ) : (
            
            <>
              {connections.map((data) => (
                <div className="bg-card border border-border w-full p-4 rounded-3xl flex justify-between items-center ">
                  <div className="flex gap-3 items-center">
                    {data?.profilePicture ? (
                      <img
                        src={data?.profilePicture}
                        className="w-14 md:w-16 md:h-16 h-14     rounded-full object-cover object-top"
                        placeholder="profile picture"
                      />
                    ) : (
                      <span className="w-14 md:w-16 md:h-16 h-14     bg-logo rounded-full text-white flex justify-center items-center font-semibold text-sm">
                        {getProfileInitials(
                          data.firstName + " " + data.lastName,
                        )}
                      </span>
                    )}
                    <div>
                      <p className="font-semibold  text-sm truncate">
                        {data.firstName + " " + data.lastName}
                      </p>
                      <p className="text-xs text-muted-foreground truncate">
                        {data.location}
                      </p>
                    </div>
                  </div>
                  <EllipsisVertical className="text-text size-5" />
                </div>
              ))}
            </>
          ))}
      </main>
    </div>
  );
};

export default Connections;
