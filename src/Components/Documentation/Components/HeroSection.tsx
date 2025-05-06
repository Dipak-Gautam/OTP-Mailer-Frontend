import OrangeButton from "../../Buttons/OrangeButton/OrangeButton";
import { loginModalProp } from "../../HeroImage/HeroImage";

const HeroSection = ({ setShowModal }: loginModalProp) => {
  return (
    <div className="md:flex px-5 md:px-10 lg:px-20 gap-14">
      <div className="p-5 flex flex-col justify-center gap-8 md:w-[50%]">
        <div className="px-10 md:px-0 font-SpaceMono italic font-bold text-2xl md:text-3xl lg:text-5xl lg:leading-16 text-center md:text-left">
          Getting Started with OTP-Mailer
        </div>
        <div className="text-lg md:text-2xl font-SpaceMono font-medium text-black">
          Welcome to OTP Mailer
        </div>
        <div className="font-medium text-gray-400 text-sm md:text-lg">
          OTP Mailer makes it easy to send One-Time Passwords (OTPs) to any
          email through our powerful and simple API. Use our professionally
          designed templates or create your own custom email design to match
          your brand.
        </div>
        <div>
          <OrangeButton
            title="Get Started"
            onClick={() => setShowModal(true)}
          />
        </div>
      </div>
      <div className="w-80 mx-auto md:w-[50%]">
        <img src="/assets/Docs.jpeg" />
      </div>
    </div>
  );
};

export default HeroSection;
