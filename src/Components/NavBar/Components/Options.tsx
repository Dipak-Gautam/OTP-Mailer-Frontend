import { useState } from "react";
import { NavLink } from "react-router-dom";
import Product from "./Product/Product";

import { GiHamburgerMenu } from "react-icons/gi";
import MotionSideNav from "./MotionSideNav";

const options = [
  { title: "Home", link: "/" },
  { title: "Docs", link: "/docs" },
  { title: "Products", link: "/Products" },
  { title: "Contact", link: "/contact" },
];

const Options = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-SpaceMono font-medium ">
        {options.map((item) => (
          <>
            {item.title === "Products" ? (
              <div className="relative">
                <Product />
              </div>
            ) : (
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
            )}
          </>
        ))}
      </div>
      <div className="flex md:hidden items-center justify-center my-auto h-full">
        <GiHamburgerMenu className="text-xl" onClick={() => setShow(true)} />
      </div>
      <MotionSideNav open={show} onClose={() => setShow(false)} />
    </>
  );
};

export default Options;
