import { NavigateFunction } from "react-router-dom";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";

const delateAccountApi = async (navigate: NavigateFunction) => {
  try {
    const request = await secureFetch({
      url: mainEndPoint + "/user/delete",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    if (request.status === 200) {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      navigate("/");
      return true;
    }
  } catch (error) {
    console.log("delete account error", error);
    throw new Error("Failed to delete account. Please try again.");
  }
};
export default delateAccountApi;
