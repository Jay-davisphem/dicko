import { IconContext } from "react-icons";
import { FiMail, FiLinkedin, FiTwitter } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
const Buttons = () => {
  return (
    <IconContext.Provider value={{ color: "#dfc2f2" }}>
      <div className="flex py-4 space-x-4 md:space-x-8">
        <a
          href="mailto:davidoluwafemi178@gmail.com"
          className="hover:border hover:rounded-full p-1"
        >
          <FiMail />
        </a>
        <a
          href="https://linkedin/in/davisphem"
          className="hover:border hover:rounded-full p-1"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://twitter.com/oluw4femi"
          className="hover:border hover:rounded-full p-1"
        >
          <FiTwitter />
        </a>
        <a
          href="https://wa.me/2348116585993"
          className="hover:border hover:rounded-full p-1"
        >
          <BsWhatsapp />
        </a>
      </div>
    </IconContext.Provider>
  );
};
export default Buttons;
