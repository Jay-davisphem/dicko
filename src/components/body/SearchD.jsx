import Input from "./Input.jsx";
const Search = ({ search, setSearch, refetch }) => {
  return (
    <>
      <Input search={search} setSearch={setSearch} />
      <button
        type="submit"
        className="bg-white w-1/5 text-xl text-sec-col hover:bg-txt-col hover:border-transparent border-4 border-sec-col"
        onClick={refetch}
      >
        Search
      </button>
    </>
  );
};

export default Search;
