import React from "react";
import { NavLink } from "react-router-dom";

const options = [
  { title: "Home", link: "/" },
  { title: "Docs", link: "/docs" },
  { title: "Products", link: "/Products" },
  { title: "Contact", link: "/contact" },
];

const Options = () => {
  return (
    <div className="flex items-center gap-6 text-gray-700 font-SpaceMono font-medium ">
      {options.map((item) => (
        <NavLink
          to={`${item.link}`}
          key={item.title}
          className={({ isActive }) =>
            isActive ? "font-bold text-gray-900" : ""
          }
        >
          <div className="hover:font-semibold hover:text-gray-600">
            {item.title}
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default Options;
