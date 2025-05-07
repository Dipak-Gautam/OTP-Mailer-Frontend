import React from "react";
import { NavLink } from "react-router-dom";

const options = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Documentation", link: "docs" },
  { title: "Contact", link: "contact" },
  { title: "Account & ApiKey", link: "account" },
];

const MobileDashOption = () => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      {options.map((item) => (
        <>
          {item.title === "Products" ? (
            <div className="relative m-0 hover:bg-[#f6d4c0] p-1 px-2 rounded-md">
              Product
            </div>
          ) : (
            <NavLink
              to={`${item.link}`}
              end
              key={item.title}
              className={({ isActive }) =>
                isActive
                  ? "font-bold text-gray-900 bg-[#f3e5dc] hover:bg-[#f6d4c0] p-1 px-2 rounded-md"
                  : " hover:bg-[#f6d4c0] p-1 px-2 rounded-md "
              }
            >
              <div className="hover:font-semibold hover:text-gray-700">
                {item.title}
              </div>
            </NavLink>
          )}
        </>
      ))}
    </div>
  );
};

export default MobileDashOption;
