import DeveloperCard from "../components/DeveloperCard";
import { useEffect } from "react";
import { useFeedInfiniteQuery } from "../services/feedApi";
import DeveloperCardSkeleton from "../components/DeveloperCardSkeleton";
import DiscoverEmptyState from "../components/DiscoverEmptyState";
import ErrorState from "../components/ErrorState";
import useErrorHandler from "../hooks/useErrorHandler";

const Discover = () => {
  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useFeedInfiniteQuery();

  const users = data?.pages.flatMap((page) => page?.data) ?? [];

  const { message, showRetry } = useErrorHandler(error, "developers");

  useEffect(() => {
    if (!isFetchingNextPage && hasNextPage && users.length <= 3) {
      fetchNextPage();
    }
  }, [users.length]);
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
        ) : isError ? (
          <ErrorState
            message={message}
            onRetry={refetch}
            showRetry={showRetry}
            isRetrying={isFetching}
          />
        ) : users?.length ? (
          <>
            {users.map((user, index) => (
              <div key={user._id} className={index === 0 ? "block" : "hidden"}>
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
