import React from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import ContactComponent from "./Component/ContactComponent";

const Contact = () => {
  return (
    <div className=" mt-4 ">
      <Navbar />
      <div className=" w-[90%] mx-auto flex flex-col flex-1   mt-5 mb-9">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
