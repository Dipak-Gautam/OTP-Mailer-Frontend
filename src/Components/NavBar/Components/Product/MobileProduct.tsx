import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const MobileProduct = () => {
  const [product, setProduct] = useState(false);

  return (
    <div>
      <div
        onClick={() => setProduct((prev) => !prev)}
        className={`${
          product && "bg-[#f3e5dc] border-b border-gray-400"
        } relative m-0 hover:bg-[#f6d4c0] p-1 px-2 rounded-t-md flex justify-between items-center cursor-pointer`}
      >
        <span>Products</span>
        <span>{product ? <FaChevronUp /> : <FaChevronDown />}</span>
      </div>

      <AnimatePresence initial={false}>
        {product && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden text-xs bg-[#f3e5dc] rounded-b-md"
          >
            <div className="p-2 flex flex-col">
              <a
                href="https://virtualpatro.com"
                target="_"
                className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-1 px-2 hover:font-semibold"
              >
                Virtual Patro
              </a>
              <a
                href="https://virtualpatro.com"
                target="_"
                className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-1 px-2 hover:font-semibold"
              >
                Ai Assistance
              </a>
              <a
                href="https://mero-car-rental.netlify.app/"
                target="_"
                className="text-gray-600 hover:text-gray-800 font-medium hover:bg-[#f3e5dc] p-1 px-2 hover:font-semibold"
              >
                Car Rental
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileProduct;
