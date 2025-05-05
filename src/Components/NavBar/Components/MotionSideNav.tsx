import { AnimatePresence, motion } from "framer-motion";
import { TbNorthStar } from "react-icons/tb";
import MobileOptions from "./MobileOptions";

interface MotionSideNavProps {
  open: boolean;
  onClose: () => void;
}

const MotionSideNav = ({ open, onClose }: MotionSideNavProps) => {
  return (
    <AnimatePresence>
      {open && (
        <div
          className={`fixed inset-0 z-40  shadow-lg h-screen  bg-transparent   
        `}
          onClick={onClose}
        >
          <motion.div
            className="w-60 h-full bg-[#eacebd] p-4"
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240 }}
            transition={{ type: "tween", duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-gray-700 pb-4 mb-6">
              <div className="border border-gray-700  rounded-full p-2 bg-gray-700 cursor-pointer">
                <TbNorthStar className="text-white text-2xl" />
              </div>
              <div className="font-SpaceMono text-xl font-bold italic">
                OTP-Mailer
              </div>
            </div>

            <MobileOptions />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MotionSideNav;
