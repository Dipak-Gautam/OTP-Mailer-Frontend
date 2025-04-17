import OrangeButton from "../../../Buttons/OrangeButton/OrangeButton";

const SecureOtp = () => {
  return (
    <div
      className="mx-20 my-24 p-5 py-20 rounded-3xl  bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("assets/SecureOtp.jpg")`,
      }}
    >
      <div className="text-white text-5xl font-SpaceMono italic font-bold text-center mb-14">
        Secure Otp
      </div>
      <div className="flex w-full justify-end mb-14 ">
        <div className="w-[45%]  text-gray-200 text-xl font-medium flex flex-col gap-14 px-10">
          <div className="text-white text-4xl text-center font-semibold font-SpaceMono italic">
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
            <OrangeButton title="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecureOtp;
