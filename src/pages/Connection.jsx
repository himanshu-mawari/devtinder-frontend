import { useState } from "react";
import { getProfileInitials } from "../utils/helpers";
import { dummyPending, dummyMatched } from "../data/connectionPage";
import { EllipsisVertical } from "lucide-react";

const Connections = () => {
  const [activeTab, setActiveTab] = useState("Pending");

  const name = dummyPending[0].firstName + " " + dummyPending[0].lastName;
  const role = dummyPending[0].role;
  const location = dummyPending[0].location;

  const handleActiveTab = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <>
      <header>
        <div>
          <h1 className="font-heading text-2xl md:text-3xl 2xl:text-2xl  font-semibold md:font-bold tracking-tight">
            Connections
          </h1>
          <p className="text-sm md:text-base 2xl:text-sm tracking-tight text-muted mt-1.5">
            New requests to review, and connections you've already made.
          </p>
        </div>
      </header>

      <article className="mt-6 mb-4">
        <div className="flex items-center gap-3 text-base font-semibold tracking-tight ">
          <button
            className={` text-[12px] ${activeTab === "Pending" ? "text-text" : "text-muted-foreground"}  transition-color hover:text-text uppercase`}
            onClick={() => handleActiveTab("Pending")}
          >
            Pending ({dummyPending.length})
          </button>

          <span className="text-muted font-light">/</span>

          <button
            className={` text-[12px] ${activeTab === "Connected" ? "text-text " : "text-muted-foreground"} hover:text-text transition-colors uppercase`}
            onClick={() => handleActiveTab("Connected")}
          >
            Connected (5)
          </button>
        </div>
      </article>

      <main className="flex flex-col gap-4">
        {activeTab === "Pending" && (
          <>
            {dummyPending.map((data) => (
              <div className="bg-card border border-border w-full p-4 rounded-3xl flex items-start gap-4">
                <span
                  className="flex-shrink-0 flex justify-center items-center text-sm font-heading font-bold tracking-tight text-primary-foreground w-14 h-14 rounded-full"
                  style={{ background: "var(--gradient-logo)" }}
                >
                  {getProfileInitials(data.firstName + " " + data.lastName)}
                </span>

                <div className="flex flex-col">
                  <p className="font-semibold  text-sm truncate">
                    {data.firstName + " " + data.lastName}
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    {data.role}
                  </p>

                  <div className="flex gap-2 mt-3">
                    <button className="bg-primary text-primary-foreground h-8 px-3  text-xs rounded-xl  font-medium transition-all active:scale-95 transform-gpu shadow hover:opacity-90">
                      Accept
                    </button>
                    <button className="bg-sidebar-accent text-text h-8 px-3 rounded-xl   text-xs font-medium transition-all active:scale-95 transform-gpu hover:bg-accent hover:text-accent-foreground shadow-sm">
                      Ignore
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}

        {/* Avator Name Location One tag(optional) */}
        {activeTab === "Connected" && (
          <>
          {dummyMatched.map(data => (

            
            <div className="bg-card border border-border w-full p-4 rounded-3xl flex justify-between items-center gap-4">
            <div className="flex gap-3 items-center">
              <span className="w-12 h-12 bg-logo rounded-full text-white flex justify-center items-center font-semibold text-sm">
                {getProfileInitials(data.firstName + " " + data.lastName)}
              </span>
              <div>
                <p className="font-semibold  text-sm truncate">{data.firstName + " " + data.lastName}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {data.location}
                </p>
              </div>
            </div>
            <EllipsisVertical className="text-text size-5" />
          </div>
            ))
          }
          </>
        )}
      </main>
    </>
  );
};

export default Connections;
