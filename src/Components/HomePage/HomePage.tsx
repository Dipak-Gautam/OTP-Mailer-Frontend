import HeroImage from "../HeroImage/HeroImage";
import StreamlinedOtp from "./Components/StreamlinedOtp/StreamlinedOtp";
import SecureOtp from "./Components/SecureOtpMain/SecureOtp";
import ReliableOtp from "./Components/ReliableOtpSection/ReliableOtp";
import ApiDriven from "./Components/ApiDrivenOtp/ApiDriven";
import Footer from "../Footer/Footer";
import { useState } from "react";
import Login from "../Authentication/Login/Login";

const HomePage = () => {
  const [openModal, setShowModal] = useState(false);
  return (
    <div>
      <HeroImage setShowModal={setShowModal} />
      <StreamlinedOtp />
      <SecureOtp setShowModal={setShowModal} />
      <ReliableOtp setShowModal={setShowModal} />
      <ApiDriven setShowModal={setShowModal} />
      <Footer />
      <Login open={openModal} close={() => setShowModal(false)} />
    </div>
  );
};

export default HomePage;
