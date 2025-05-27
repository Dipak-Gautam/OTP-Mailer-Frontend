import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";
import { set } from "react-hook-form";

const testEmailApi = async (
  email: string,
  setMessage: React.Dispatch<SetStateAction<number>>
) => {
  try {
    const user = localStorage.getItem("userInfo");

    if (user === null) return;
    const userData = JSON.parse(user);
    console.log("i am called", userData._id);
    const formData = {
      email: email,
      otpDigit: 4,
      id: userData._id,
    };
    const response = await secureFetch({
      url: mainEndPoint + "/email/otp-verify",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("response", response);
    if (response.status === 200) {
      setMessage(2);
    } else {
      setMessage(1);
    }
  } catch (error) {
    setMessage(1);
    throw error;
  }
};
export default testEmailApi;
