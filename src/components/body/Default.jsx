import DisplayDict from "./DisplayDict.jsx";
import { useEffect } from "react";
const Default = ({ setSearch, searchDict }) => {
  //useEffect(() => searchDict("welcome"), []);

  return (
    <div>
      <h1 className="text-4xl">
        Sample Search: <strong>Welcome</strong>
      </h1>
    </div>
  );
};
export default Default;
