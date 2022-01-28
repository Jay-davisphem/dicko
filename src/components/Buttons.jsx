import { IconContext } from "react-icons";
import { SiGmail } from "react-icons/si";
const Buttons = () => {
  return (
    <IconContext.Provider value={{ color: "#dfc2f2" }}>
      <div>
        <div>
          <SiGmail />
        </div>
      </div>
    </IconContext.Provider>
  );
};
export default Buttons;
