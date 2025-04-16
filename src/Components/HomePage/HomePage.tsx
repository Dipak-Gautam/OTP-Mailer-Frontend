import HeroImage from "../HeroImage/HeroImage";
import StreamlinedOtp from "./Components/StreamlinedOtp/StreamlinedOtp";
import SecureOtp from "./Components/SecureOtpMain/SecureOtp";
import ReliableOtp from "./Components/ReliableOtpSection/ReliableOtp";

const HomePage = () => {
  return (
    <div>
      <HeroImage />
      <StreamlinedOtp />
      <SecureOtp />
      <ReliableOtp />
    </div>
  );
};

export default HomePage;
