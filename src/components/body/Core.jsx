import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import DisplayDict from "./DisplayDict.jsx";

const Core = ({ setSearch, isLoading, isError, data, error, searchDict }) => {
  if (isLoading) return <Loading />;

  if (isError) return <Error error={error} />;
  if (data)
    return (
      <DisplayDict dat={data} setSearch={setSearch} searchDict={searchDict} />
    );
  return <h1>Default</h1>;
};
export default Core;
