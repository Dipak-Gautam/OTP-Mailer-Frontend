import WhiteButton from "../../Buttons/WhiteButton/WhiteButton";
import OrangeButton from "../../Buttons/OrangeButton/OrangeButton";
import { loginModalProp } from "../HeroImage";
import { useNavigate } from "react-router-dom";

const TextPart = ({ setShowModal }: loginModalProp) => {
  const navigate = useNavigate();
  return (
    <div className="order-2 md:order-1  flex flex-col justify-center md:w-[50%] space-y-7 md:space-y-14 px-3 md:px-6 font-semibold text-gray-600 text-sm md:text-lg mt-10 md:mt-0">
      <div className="font-SpaceMono text-xl md:text-4xl font-bold  px-3 md:px-5 whitespace-break-spaces md:leading-14 italic text-black">
        Empower Your Users with Secure and Convenient One-Time
      </div>

      <div className="">
        OTP-Mailer is a powerful tool that simplifies the process of sending
        one-time passwords to your users' Gmail accounts
      </div>

      <div>
        Customize your email templates, choose from our pre-designed options
      </div>

      <div className="flex gap-3 mb-9">
        <OrangeButton title="Get Started" onClick={() => setShowModal(true)} />
        <WhiteButton title="Learn More" onClick={() => navigate("/docs")} />
      </div>
    </div>
  );
};

export default TextPart;
