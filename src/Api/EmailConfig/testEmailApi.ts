import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";
import { set } from "react-hook-form";
import { IUserInfo } from "../../Schema/userInfo.Schema";

const testEmailApi = async (
  email: string,
  setMessage: React.Dispatch<SetStateAction<number>>
) => {
  try {
    const user = localStorage.getItem("userInfo");

    if (user === null) return;
    const userData: IUserInfo = JSON.parse(user);

    const formData = {
      email: email,
      otpDigit: 4,
      secretCode: userData.secretCode,
    };
    const response = await secureFetch({
      url: mainEndPoint + "/email/otp-verify",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.status === 200) {
      setMessage(2);
    } else {
      setMessage(4);
    }
  } catch (error) {
    setMessage(1);
    throw error;
  }
};
export default testEmailApi;
