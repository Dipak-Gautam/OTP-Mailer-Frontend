import { IUserInfo } from "../Schema/userInfo.Schema";

const asyncStorageUserInfo = (data: IUserInfo) => {
  console.log("User Info Data: ", data);
  localStorage.setItem("userInfo", JSON.stringify(data));
};
export default asyncStorageUserInfo;
