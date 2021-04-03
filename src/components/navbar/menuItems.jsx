import React from "react";
import { Link } from "react-router-dom";

const menu = ["home", "worst behaviour", "best behaviour", "bali behaviour"];

const MenuItems = ({ handleToggle, expand }) => {
  return (
    <React.Fragment>
      <div className="menu-container">
        <nav className="navigation-container">
          {menu.map((items) => (
            <ul className="menu-list" key={items}>
              <li className={`list-items-${items}`}>
                <Link
                  onClick={() =>
                    handleToggle(!expand, "navigation-close", "spin")
                  }
                  className="item with-transition"
                  to={`/${items}`}
                >
                  {items}
                </Link>
              </li>
            </ul>
          ))}
        </nav>
      </div>
    </React.Fragment>
  );
};

export default MenuItems;
