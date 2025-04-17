import OrangeButton from "../../../Buttons/OrangeButton/OrangeButton";

const ApiDriven = () => {
  return (
    <div className="mx-20 py-20">
      <div className="flex flex-col items-center text-lg font-medium text-gray-400 gap-3">
        <div>Seamless Integration</div>
        <div className="text-black font-SpaceMono font-extrabold text-4xl italic">
          API-Driven OTP
        </div>
        <div className="w-[60%] text-center">
          Integrate OTP-Mailer's powerful API into your existing systems,
          ensuring a smooth and effortless user experience for your customers
        </div>
      </div>

      <div className="mt-12 px-10 flex justify-between">
        <div className="w-[45%] rounded-lg overflow-hidden">
          <img src="/assets/Api-Driven.jpg" />
        </div>
        <div className="w-[50%] flex flex-col justify-center gap-10">
          <div className="text-4xl text-black font-SpaceMono font-bold italic">
            Secure and Reliable OTP Delivery
          </div>
          <div className="font-medium text-xl  text-gray-400">
            Our advanced API allows you to seamlessly incorporate one-time
            password functionality into your applications, empowering your users
            with a secure and convenient way to access their accounts
          </div>
          <div>
            <OrangeButton title="Get Started" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDriven;
