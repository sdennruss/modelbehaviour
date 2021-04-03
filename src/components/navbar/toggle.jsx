import React, { useState } from "react";
import MenuItems from "./menuItems";
import Title from "./title";

const Toggle = () => {
  const [expand, setExpand] = useState(false);
  const [toggle, setToggle] = useState("");
  const [rotate, setRotate] = useState("toggle");

  const handleToggle = (expand, close, spin) => {
    expand == false ? setToggle(close) : setToggle("");
    expand == true ? setRotate(spin) : setRotate("toggle");

    setExpand(expand);
  };

  return (
    <React.Fragment>
      <div className={toggle}></div>
      <div className="header-container">
        <div className="title-container">
          <Title />
        </div>
        <div className="toggle-container">
          <p
            className={rotate}
            onClick={() => handleToggle(!expand, "navigation-close", "spin")}
          >
            Menu
          </p>
        </div>
      </div>
      {expand && <MenuItems handleToggle={handleToggle} expand={expand} />}
    </React.Fragment>
  );
};

export default Toggle;
