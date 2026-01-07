import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const newPasswordApi = async (
  email: string,
  password: string,
  setShowAlert: React.Dispatch<SetStateAction<boolean>>
) => {
  console.log(`${mainEndPoint}/user/change`);
  const request = await secureFetch({
    url: "http://localhost:3000/user/change",
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
