const Error = ({ search }) => {
  return (
    <div className="bg-sec-col min-h-screen md:w-4/5 p-8 w-[100%] text-4xl">
      The Word{" "}
      <strong>
        <em>"{search}"</em>
      </strong>{" "}
      not found!
    </div>
  );
};
export default Error;
