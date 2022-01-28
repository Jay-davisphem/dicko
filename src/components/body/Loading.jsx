const Loading = ({ use, ani }) => {
  return (
    <div className="min-h-screen p-8 md:p-16 w-[100%] md:w-4/5 md:m-lg bg-sec-col text-xl">
      {use ? <h1>{use}</h1> : ""}
      <div className={`${ani} flex space-x-4`}>
        <div className="flex-1 space-y-6 py-1">
          <div className="h-4 bg-txt-col rounded w-1/5"></div>
          <div className="space-y-3">
            <div className="grid grid-cols-8 gap-4">
              <div className="h-4 bg-txt-col rounded col-span-2"></div>
              <div className="h-4 w-4 bg-txt-col rounded-full"></div>
            </div>
          </div>
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
              <div className="grid grid-cols-6 gap-4">
                <div className="h-4 bg-txt-col rounded col-span-2"></div>
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((a) => (
                  <div className="h-4 bg-txt-col rounded col-span-1"></div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Loading;
