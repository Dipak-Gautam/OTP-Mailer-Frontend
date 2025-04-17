import HeroImage from "../HeroImage/HeroImage";
import StreamlinedOtp from "./Components/StreamlinedOtp/StreamlinedOtp";
import SecureOtp from "./Components/SecureOtpMain/SecureOtp";
import ReliableOtp from "./Components/ReliableOtpSection/ReliableOtp";
import ApiDriven from "./Components/ApiDrivenOtp/ApiDriven";

const HomePage = () => {
  return (
    <div>
      <HeroImage />
      <StreamlinedOtp />
      <SecureOtp />
      <ReliableOtp />
      <ApiDriven />
    </div>
  );
};

export default HomePage;
