import { useState } from "react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="hover:font-semibold hover:text-gray-600"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Products
      </div>
      <div
        className={`border border-gray-500 w-30 h-30 overflow-hidden rounded-md bg-white/50 flex justify-center items-center absolute ${
          isOpen ? "visible" : "hidden"
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        Hello
      </div>
    </>
  );
};

export default Product;
