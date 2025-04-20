import { UseFormSetError } from "react-hook-form";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";
import asyncStorageToken from "../../CustomFunctions/localStoreToken";
import asyncStorageUserInfo from "../../CustomFunctions/localStorageUserInfo";
import { NavigateFunction } from "react-router-dom";
import { ILoginProp } from "../../Schema/login.Schema";

const loginApi = async (
  data: ILoginProp,
  setError: UseFormSetError<{
    email: string;
    password: string;
  }>,
  navigate: NavigateFunction
) => {
  const request = await secureFetch({
    url: `${mainEndPoint}/user/login`,
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (request.status == 200) {
    const response = await request.json();
    asyncStorageToken(response.token);
    asyncStorageUserInfo(response.data);
    navigate("/dashboard");
    console.log("response", response);
  } else {
    setError("root", { message: "Invalid email or password" });
  }
};
export default loginApi;
