import React from "react";

const WelcomeTemplate = () => {
  return (
    <div className="">
      <div className="bg-gray-100 text-gray-800 font-sans">
        <div className="max-w-[600px] mx-auto  bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300 text-sm">
          <div className="bg-blue-600 text-white text-center text-2xl font-bold p-3">
            Welcome to Our Community!
          </div>

          <div className="p-4 leading-relaxed">
            <p className="">Hello Dipak,</p>

            <p className="mb-2">
              We’re thrilled to have you join us! Your registration was
              successful, and we’re committed to providing you with the best
              experience possible.
            </p>

            <p className="mb-2">Here’s how you can get started:</p>

            <p className="inline-block bg-blue-600 text-white font-bold text-sm px-6 py-2 rounded-md transition-colors hover:bg-blue-700 cursor-pointer">
              Get Started
            </p>

            <p className="mt-3">
              If you need any help, don’t hesitate to contact us. We’re here to
              support you every step of the way.
            </p>
          </div>

          <div className="bg-gray-100 text-center text-gray-500 text-xs p-3 border-t border-gray-300">
            <p>
              &copy; ${new Date().getFullYear()} OtpMailer. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeTemplate;
