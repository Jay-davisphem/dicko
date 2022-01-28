const Loading = () => {
  return (
    <div className="p-2 md:p-4 w-[100%] md:w-4/5 md:m-lg bg-sec-col text-xl">
      <div className="animate-pulse flex space-x-4">
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-txt-col rounded w-1/5"></div>
          <div className="h-4 bg-txt-col rounded w-2/5"></div>
          <div className="h-4 bg-txt-col rounded w-1/5"></div>
          {[1, 2, 3].map((a) => (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-txt-col rounded col-span-1"></div>
                <div className="h-4 bg-txt-col rounded col-span-2"></div>
              </div>
            </div>
          ))}
          {[1, 2].map((a) => (
            <div className="space-y-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="h-4 bg-txt-col rounded col-span-1"></div>
                <div className="h-4 bg-txt-col rounded col-span-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Loading;
