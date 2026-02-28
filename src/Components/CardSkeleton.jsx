const CardSkeleton = () => {
  return (
    <div className="w-80  mx-auto mt-10">
      <div className="relative rounded-3xl overflow-hidden shadow-xl bg-base-200 animate-pulse">
        <div className="h-[450px] w-full bg-base-300"></div>

        <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
          <div className="h-8 w-40 bg-base-100 rounded"></div>

          <div className="space-y-2">
            <div className="h-4 w-64 bg-base-100 rounded"></div>
            <div className="h-4 w-48 bg-base-100 rounded"></div>
          </div>

          <div className="flex gap-2">
            <div className="h-8 w-24 bg-base-100 rounded-full"></div>
            <div className="h-8 w-28 bg-base-100 rounded-full"></div>
          </div>

          <div className="flex justify-between pt-4">
            <div className="h-12 w-28 bg-base-100 rounded-xl"></div>
            <div className="h-12 w-28 bg-base-100 rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
