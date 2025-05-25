import { IUserInfo } from "../Schema/userInfo.Schema";

const asyncStorageUserInfo = (data: IUserInfo) => {
  localStorage.setItem("userInfo", JSON.stringify(data));
};
export default asyncStorageUserInfo;
