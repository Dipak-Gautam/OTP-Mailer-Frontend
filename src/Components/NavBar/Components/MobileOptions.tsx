import { NavLink } from "react-router-dom";
import MobileProduct from "./Product/MobileProduct";
const options = [
  { title: "Home", link: "/" },
  { title: "Docs", link: "/docs" },
  { title: "Products", link: "/Products" },
  { title: "Contact", link: "/contact" },
];

const MobileOptions = () => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      {options.map((item) => (
        <>
          {item.title === "Products" ? (
            <MobileProduct />
          ) : (
            <NavLink
              to={`${item.link}`}
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

export default MobileOptions;
