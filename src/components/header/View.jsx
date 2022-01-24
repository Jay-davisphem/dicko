const View = ({ textVal }) => {
  return (
    <>
      <a
        href="#"
        className={`hover:border hover:border-txt-col text-txt-col block px-3 py-2 rounded-md ${textVal} font-medium`}
      >
        Home
      </a>

      <a
        href="#"
        className={`text-txt-col hover:border hover:border-txt-col block px-3 py-2 rounded-md ${textVal} font-medium`}
      >
        Vocabulary
      </a>

      <a
        href="#"
        className={`text-txt-col hover:border hover:border-txt-col block px-3 py-2 rounded-md ${textVal} font-medium`}
      >
        Contact Me
      </a>

      <a
        href="#"
        className={`text-txt-col hover:border hover:border-txt-col block px-3 py-2 rounded-md ${textVal} font-medium`}
      >
        About Us
      </a>
    </>
  );
};

export default View;
