import { useQuery } from "react-query";
import { useEffect } from "react";
import axios from "axios";
import Loading from "./Loading.jsx";
import Error from "./Error.jsx";
import DisplayDict from "./DisplayDict.jsx";

const searchDict = (search) => {
  console.log(search);
  return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
};

const Core = ({ search }) => {
  const { isLoading, data, refetch, isFetching, isError, error } = useQuery(
    "search-words",
    () => searchDict(search),
    {
      enabled: false,
    }
  );

  if (isLoading) return <Loading />;

  if (isError) return <Error error={error} />;

  return (
    <div className="flex md:justify-center">
      <DisplayDict data={data} />
    </div>
  );
};
export default Core;
