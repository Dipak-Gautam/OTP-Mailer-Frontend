import { SetStateAction } from "react";
import { IEmailConfig } from "../../Schema/emailConfig.Schema";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const emailConfigApi = async (
  data: IEmailConfig,
  setIsLoading: React.Dispatch<SetStateAction<number>>
) => {
  console.log("i am called");
  const formData = { data: data };
  const request = await secureFetch({
    url: mainEndPoint + "/config/email",
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: ` Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(formData),
  });
  const response = await request.json();
  if (request.status === 200) {
    setIsLoading(3);
    return response;
  } else {
    setIsLoading(4);
    throw new Error(response.message || "Failed to save email configuration");
  }
};
export default emailConfigApi;
