import OrangeButton from "../../../Buttons/OrangeButton/OrangeButton";
import { loginModalProp } from "../../../HeroImage/HeroImage";

const SecureOtp = ({ setShowModal }: loginModalProp) => {
  return (
    <div
      className=" mx-5 md:mx-10 lg:mx-20 my-24 p-5 py-14 md:py-20 rounded-3xl  bg-left-top lg:bg-cover bg-no-repeat "
      style={{
        backgroundImage: `url("assets/SecureOtp.jpg")`,
      }}
    >
      <div className="text-white text-3xl md:text-5xl font-SpaceMono italic font-bold text-center mb-5 md:mb-14">
        Secure Otp
      </div>
      <div className="flex w-full justify-end mb-7 md:mb-14 ">
        <div className="lg:w-[45%]  text-gray-200 text-sm md:text-xl font-medium flex flex-col gap-4 md:gap-14 px-10">
          <div className="text-white text-xl md:text-4xl text-center font-semibold font-SpaceMono italic">
            Customizable Email
          </div>
          <div>
            Whether you prefer our pre-built templates or want to create your
            own unique designs, OTP-Mailer empowers you to tailor the email
            experience to your brand and user
          </div>
          <div>
            Elevate your user experience with our comprehensive email
            customization options. Choose from a variety of layouts, fonts,
            colors, and imagery to ensure your OTP messages are visually
            appealing and on-brand
          </div>
          <div className="">
            <OrangeButton
              title="Get Started"
              onClick={() => setShowModal(true)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureOtp;
