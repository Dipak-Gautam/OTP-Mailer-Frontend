import React, { useState } from "react";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import ContactComponent from "./Component/ContactComponent";
import Login from "../Authentication/Login/Login";

const Contact = () => {
  const [openModal, setShowModal] = useState(false);
  return (
    <>
      <div className=" mt-4 ">
        <Navbar setShowModal={setShowModal} />
        <div className=" w-[90%] mx-auto flex flex-col flex-1   mt-5 mb-9">
          <ContactComponent />
        </div>
        <Footer />
      </div>
      <Login open={openModal} close={() => setShowModal(false)} />
    </>
  );
};

export default Contact;
