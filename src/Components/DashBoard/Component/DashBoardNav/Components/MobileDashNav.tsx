import { AnimatePresence, motion } from "framer-motion";
import { TbNorthStar } from "react-icons/tb";
import MobileDashOption from "./MobileDashOption";
import { TbLogout2 } from "react-icons/tb";
import { useState } from "react";
import DeleteAccountModal from "../../../../Authentication/DeleteModal/DeleteAccountModal";

interface MobileDashNavProps {
  open: boolean;
  onClose: () => void;
}

const MobileDashNav = ({ open, onClose }: MobileDashNavProps) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-20  shadow-lg h-screen  bg-transparent"
            onClick={onClose}
          >
            <motion.div
              className="w-60 h-full bg-[#eacebd] p-4 flex flex-col"
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
              <MobileDashOption />
              <div>
                <TbLogout2 className="text-3xl" onClick={() => setShow(true)} />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      <DeleteAccountModal open={show} onClose={() => setShow(false)} />
    </>
  );
};

export default MobileDashNav;
