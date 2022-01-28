import Loading from "./Loading.jsx";
import Default from "./Default.jsx";
import Error from "./Error.jsx";
import DisplayDict from "./DisplayDict.jsx";

const Core = ({ setSearch, data, isLoading, isError, search, searchDict }) => {
  if (isLoading) return <Loading />;
  if (isError) return <Error search={search} />;
  if (data)
    return (
      <DisplayDict dat={data} setSearch={setSearch} searchDict={searchDict} />
    );
  return <Default />;
};
export default Core;
