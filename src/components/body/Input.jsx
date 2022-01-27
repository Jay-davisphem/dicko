const Input = ({ search, setSearch }) => {
  console.log(search);
  return (
    <input
      type="search"
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search word"
      className="px-2 focus:outline focus:outline-txt-col focus:outline-1 caret-ter-col bg-sec-col h-14 text-xl w-[100%] md:w-5/12 rounded-lg rounded-r-none md:rounded-r-none md:rounded-none"
    />
  );
};

export default Input;
