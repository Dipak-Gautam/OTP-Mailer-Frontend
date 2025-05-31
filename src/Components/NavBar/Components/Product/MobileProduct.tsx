import { FaChevronDown } from "react-icons/fa";

const MobileProduct = () => {
  return (
    <div>
      <div className="relative m-0 hover:bg-[#f6d4c0] p-1 px-2 rounded-md flex justify-between items-center">
        <span> Products</span>
        <span>
          <FaChevronDown />
        </span>
      </div>
    </div>
  );
};

export default MobileProduct;
