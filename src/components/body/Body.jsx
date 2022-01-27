import useWindowSize from "../../hooks/useWindowSize";
import { useState } from "react";
import SearchM from "./SearchM.jsx";
import SearchD from "./SearchD.jsx";
import Input from "./Input.jsx";
import Core from "./Core.jsx";

const Body = () => {
  const [search, setSearch] = useState("");
  return (
    <main>
      {useWindowSize().width < 438 ? (
        <div className="bg-ter-col p-2">
          <h1 className="text-5xl md:text-6xl text-center md:mt-5">Dicko</h1>
          <div>
            <form className="flex justify-center space-x-0 md:my-12 my-8">
              <SearchM search={search} setSearch={setSearch} />
            </form>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center md:bg-ter-col">
          <h1 className="text-5xl md:text-6xl text-center mt-4 md:mt-5 ml-24">
            Dicko
          </h1>
          <form className="flex justify-center gap-8 md:my-12 my-8 w-11/12">
            <SearchD search={search} setSearch={setSearch} />
          </form>
        </div>
      )}
      <Core search={search} />
    </main>
  );
};

export default Body;
