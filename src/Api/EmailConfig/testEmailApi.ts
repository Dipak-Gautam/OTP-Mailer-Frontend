import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const testEmailApi = async (
  email: string,
  setMessage: React.Dispatch<SetStateAction<number>>,
  responseMessage?: React.RefObject<string>
) => {
  try {
    const formData = {
      email: email,
      otpDigit: 6,
    };
    const request = await secureFetch({
      url: mainEndPoint + "/email/otp-verify",
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const response = await request.json();

    if (request.status === 200) {
      setMessage(2);
      responseMessage && (responseMessage.current = response.otp);
    } else {
      setMessage(4);
    }
  } catch (error) {
    setMessage(4);
    throw error;
  }
};
export default testEmailApi;
