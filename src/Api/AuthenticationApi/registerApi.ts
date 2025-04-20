import { UseFormSetError } from "react-hook-form";
import { NavigateFunction } from "react-router-dom";
import secureFetch from "../ApiSettings/SecureFetch";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import asyncStorageToken from "../../CustomFunctions/localStoreToken";
import asyncStorageUserInfo from "../../CustomFunctions/localStorageUserInfo";

const registerApi = async (
  name: string,
  email: string,
  password: string,
  setError: UseFormSetError<{
    password: string;
    confirmPassword: string;
  }>,
  navigate: NavigateFunction
) => {
  const formData = {
    name: name,
    email: email,
    password: password,
  };

  const request = await secureFetch({
    url: `${mainEndPoint}/user/signup`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  if (request.status == 200) {
    const response = await request.json();
    asyncStorageToken(response.token);
    asyncStorageUserInfo(response.response);
    navigate("/dashboard");
    console.log("response", response);
  } else {
    setError("root", { message: "Something went wrong please try again" });
  }
};

export default registerApi;
