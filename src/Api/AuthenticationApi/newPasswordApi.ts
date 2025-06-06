import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const newPasswordApi = async (
  email: string,
  password: string,
  setShowAlert: React.Dispatch<SetStateAction<boolean>>
) => {
  const request = await secureFetch({
    url: mainEndPoint + `/user/forget-password`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ email: email, newPassword: password }),
  });
  if (request.status == 200) {
    setShowAlert(true);
  }
};
export default newPasswordApi;
