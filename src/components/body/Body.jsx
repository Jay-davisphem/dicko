import useWindowSize from "../../hooks/useWindowSize";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import SearchM from "./SearchM.jsx";
import SearchD from "./SearchD.jsx";
import Input from "./Input.jsx";
import Core from "./Core.jsx";

const Body = () => {
  const searchDict = (search) => {
    setIsLoading(true);
    axios
      .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then((res) => {
        const data = res.data;
        setData(data);
        setIsLoading(false);
        setIsError(false);
        setError("");
      })
      .catch((err) => {
        const msg = err.message;
        setError(msg);
        setData(null);
        setIsError(true);
        setIsLoading(false);
      });
  };

  const [search, setSearch] = useState("");
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className="rounded-md min-h-screen bg-ter-col">
      {useWindowSize().width < 438 ? (
        <div className="bg-ter-col p-2">
          <a
            href="/"
            className="block text-5xl md:text-6xl text-center md:mt-5"
          >
            Dicko
          </a>
          <div>
            <form className="flex justify-center space-x-0 md:my-12 my-8">
              <SearchM
                search={search}
                setSearch={setSearch}
                searchDict={searchDict}
              />
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center md:bg-ter-col">
          <a
            href="/"
            className="block text-5xl md:text-6xl text-center mt-4 md:mt-5 ml-24"
          >
            Dicko
          </a>
          <form className="flex justify-center gap-8 md:my-12 my-8 w-11/12">
            <SearchD
              search={search}
              setSearch={setSearch}
              searchDict={searchDict}
            />
          </form>
        </div>
      )}
      <div className="flex md:justify-center">
        <Core
          data={data}
          setSearch={setSearch}
          isLoading={isLoading}
          search={search}
          isError={isError}
          searchDict={searchDict}
        />
      </div>
    </main>
  );
};

export default Body;
