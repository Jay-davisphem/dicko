import useWindowSize from "../../hooks/useWindowSize";
import SearchM from "./SearchM.jsx";
import SearchD from "./SearchD.jsx";
import Input from "./Input.jsx";
const Body = () => {
  return (
    <main>
      <h1 className="text-5xl md:text-6xl text-center mt-4 md:mt-5">Dicko</h1>
      <div>
        <form className="md:grid-cols-2 grid place-items-center md:content-between gap-x-px">
          {useWindowSize().width < 438 ? <SearchM /> : <SearchD />}
        </form>
      </div>
    </main>
  );
};

export default Body;
