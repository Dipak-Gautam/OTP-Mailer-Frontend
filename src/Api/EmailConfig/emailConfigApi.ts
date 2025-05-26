import { IEmailConfig } from "../../Schema/emailConfig.Schema";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const emailConfigApi = async (data: IEmailConfig) => {
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
  console.log("request", request);
  const response = await request.json();
  console.log("response", response);
};
export default emailConfigApi;
