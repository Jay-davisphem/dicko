import Input from "./Input.jsx";
const Search = ({ search, setSearch, searchDict }) => {
  return (
    <>
      <Input search={search} setSearch={setSearch} />
      <button
        type="submit"
        className="bg-white w-1/5 text-xl text-sec-col hover:bg-txt-col hover:border-transparent border-4 border-sec-col"
        onClick={(e) => {
          e.preventDefault();
          searchDict(search);
        }}
      >
        Search
      </button>
    </>
  );
};

export default Search;
