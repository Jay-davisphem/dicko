import SvgPath from "./SvgPath";
const NavBtn = ({ setIsOpen, isOpen }) => {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      type="button"
      className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-txt-col"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      <span className="sr-only">Open main menu</span>
      {!isOpen ? (
        <SvgPath d="M4 6h16M4 12h16M4 18h16" />
      ) : (
        <SvgPath d="M6 18L18 6M6 6l12 12" />
      )}
    </button>
  );
};
export default NavBtn;
