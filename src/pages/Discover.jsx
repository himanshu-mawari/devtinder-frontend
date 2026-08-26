import DeveloperCard from "../components/DeveloperCard";
import { useFeedQuery } from "../services/feedApi";
import DeveloperCardSkeleton from "../components/DeveloperCardSkeleton";
import DiscoverEmptyState from "../components/DiscoverEmptyState";

const Discover = () => {
  const { data: users, isLoading } = useFeedQuery();
  return (
    <div className="w-full">
      <div className="flex flex-col ">
        <header>
          <h1 className="font-heading text-2xl md:text-3xl 2xl:text-2xl  font-semibold md:font-bold tracking-tight">
            Discover
          </h1>
          <p className="text-sm md:text-base 2xl:text-sm tracking-tight text-muted mt-1.5">
            Find developers who match your interests, tech stack, and what
            you're building.
          </p>
        </header>

        {isLoading ? (
          <DeveloperCardSkeleton />
        ) : !users.length ? (
          <>
            {users.map((user, index) => (
              <div className={index === 0 ? "block" : "hidden"}>
                <DeveloperCard user={user} />
              </div>
            ))}
          </>
        ) : (
          <DiscoverEmptyState />
        )}
      </div>
    </div>
  );
};

export default Discover;
