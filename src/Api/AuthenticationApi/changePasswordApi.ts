import { SetStateAction } from "react";
import { mainEndPoint } from "../ApiSettings/Endpoint";
import secureFetch from "../ApiSettings/SecureFetch";
import { UseFormSetError } from "react-hook-form";
import { IChangePassword } from "../../Schema/changePassword.Schema";

const changePasswordApi = async (
  oldPassword: string,
  newPassword: string,
  setShowAlert: React.Dispatch<SetStateAction<boolean>>,
  setError: UseFormSetError<IChangePassword>
) => {
  try {
    const formData = {
      oldPassword: oldPassword,
      newPassword: newPassword,
    };

    const request = await secureFetch({
      url: mainEndPoint + "/user/password",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        authorization: `Barer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(formData),
    });

    if (request.status === 200) {
      setShowAlert(true);
    } else {
      setError("root", {
        message: "Failed to change password. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error changing password:", error);
  }
};
export default changePasswordApi;
