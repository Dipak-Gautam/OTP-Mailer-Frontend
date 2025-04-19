import { FaPhoneVolume } from "react-icons/fa6";
import { LuMail } from "react-icons/lu";
import { FaSquareGithub } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const HeroImage = () => {
  return (
    <div className="flex flex-col flex-1 p-5 ">
      <div className="text-2xl md:text-5xl  text-black  font-SpaceMono text-center my-12 italic font-bold ">
        About Me
      </div>
      <div className="flex p-5 font-lexend text-gray-500 font-medium ">
        <div className=" flex flex-col flex-1 p-5 gap-7 justify-center ">
          <div className="  text-2xl md:text-4xl lg:text-7xl font-SpaceMono  font-semibold text-black italic ">
            Full Stack <p>Developer</p>
          </div>
          <div className=" text-gray-500 text-sm lg:text-xl ">
            Hi, I'm Dipak Gautam. A passionate Full Stack Developer
            <p> based in Pokhara, Nepal.</p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 items-center">
              <FaPhoneVolume className="md:text-2xl" />
              <p className="text-lg">+977 9766607321</p>
            </div>
            <div className="flex gap-3 items-center">
              <LuMail className="md:text-2xl" />
              <p className="text-lg"> anjangautam095@gmail.com</p>
            </div>
          </div>
          <div className="flex text-4xl gap-4 text-gray-600">
            <FaSquareGithub className="hover:text-gray-700" />
            <FaFacebookSquare className="hover:text-gray-700" />
            <FaLinkedin className="hover:text-gray-700" />
          </div>
        </div>
        <div className=" w-[40%] hidden md:flex justify-end">
          <img src="/assets/Contact/working-robot.png" className="w-[500px] " />
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
