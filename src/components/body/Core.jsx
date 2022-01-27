import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import DisplayDict from "./DisplayDict.jsx";

const Core = ({ setSearch, isLoading, isError, data, error, refetch }) => {
  if (isLoading) return <Loading />;

  if (isError) return <Error error={error} />;

  return (
    <div className="flex md:justify-center">
      <DisplayDict dat={data} setSearch={setSearch} refetch={refetch} />
    </div>
  );
};
export default Core;
