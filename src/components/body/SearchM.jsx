import Input from "./Input.jsx";
const Search = ({ search, setSearch }) => {
  return (
    <>
      <Input search={search} setSearch={setSearch} />
      <span className="inset-y-0 flex bg-sec-col rounded-lg rounded-l-none">
        <button
          type="submit"
          className="p-1 focus:outline-none focus:shadow-outline"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            className="w-12 h-12"
          >
            <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>>
          </svg>
        </button>
      </span>
    </>
  );
};

export default Search;
