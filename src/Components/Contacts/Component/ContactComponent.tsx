import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import TextInputControllers from "../../Input/TextInputController";
import UpdateButton from "../../Buttons/UpdateButton/UpdateButton";
import HeroImage from "./HeroImage";
import { ILoginProp, LoginSignupSchema } from "../../../Schema/login.Schema";
import OrangeButton from "../../Buttons/OrangeButton/OrangeButton";

const ContactComponent = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginProp>({
    resolver: zodResolver(LoginSignupSchema),
  });
  const onSubmit: SubmitHandler<ILoginProp> = async (data) => {
    console.log("hello from submit");
  };
  return (
    <div className="flex-1 h-[100vh] overflow-y-auto">
      <div
        className=" flex-1 text-gray-500 font-lexend p-5 bg-no-repeat  h-[700px] w-full flex justify-end"
        style={{
          backgroundImage: "url('/assets/Contact/ai3.jpg')",
          backgroundSize: "contain",
        }}
      >
        <div className="border rounded-lg border-slate-3 shadow-md p-3 md:p-5 xl:w-[40%] md:mr-6 md:mt-6 backdrop-blur-3xl ">
          <div className="text-lg font-semibold font-SpaceMono  ">
            Get In Touch
          </div>
          <div className="text-center font-SpaceMono text-black text-4xl font-semibold my-3 italic">
            Contact
          </div>
          <div className="text-center mb-5 font-medium">
            Provide me your information I will reach back to you.
          </div>
          <div className="my-3 mx-12">
            <TextInputControllers
              label="Name"
              name="Name"
              control={control}
              error={errors.email}
            />
            <TextInputControllers
              label="Email Address"
              name="Name"
              control={control}
              error={errors.email}
            />
          </div>
          <div className="mx-12 my-5">
            <div className="text-sm mb-2">Message :</div>
            <textarea
              name=""
              id=""
              className="border border-slate-4\00 rounded-lg w-full "
              rows={8}
            />
          </div>

          <div className="flex justify-center mt-8">
            <OrangeButton title="Submit" />
          </div>
        </div>
      </div>
      <HeroImage />
    </div>
  );
};

export default ContactComponent;
