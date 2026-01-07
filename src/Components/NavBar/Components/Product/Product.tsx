import { useState } from "react";

const Product = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="hover:font-semibold hover:text-gray-600 cursor-pointer"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        Products
      </div>
      <div
        className={`border border-gray-500 w-44  overflow-hidden rounded-md bg-white/50 flex flex-col justify-center absolute ${
          isOpen ? "visible" : "hidden"
        }`}
        onMouseLeave={() => setIsOpen(false)}
      >
        <a
          href="https://virtualpatro.com"
          target="_"
          className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-2 px-4 hover:font-semibold"
        >
          Virtual Patro
        </a>
        <a
          href="https://virtualpatro.com"
          target="_"
          className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-2 px-4 hover:font-semibold"
        >
          Ai Assistance
        </a>
        <a
          href="https://mero-car-rental.netlify.app/"
          target="_"
          className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-2 px-4 hover:font-semibold"
        >
          Car Rental
        </a>
      </div>
    </>
  );
};

export default Product;
