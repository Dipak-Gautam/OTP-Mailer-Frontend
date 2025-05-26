import { IEmailConfig } from "../../Schema/emailConfig.Schema";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const emailConfigApi = async (data: IEmailConfig) => {
  const request = await secureFetch({
    url: mainEndPoint + "/email-config",
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const response = await request.json();
  console.log("response", response);
};
export default emailConfigApi;
