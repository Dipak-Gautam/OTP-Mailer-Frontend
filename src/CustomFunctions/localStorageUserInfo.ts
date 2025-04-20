import { UserInfoMain } from "../Schema/UserMainInfo/userInfo.schema";

const asyncStorageUserInfo = (data: UserInfoMain) => {
  console.log("saved data", data);
  localStorage.setItem("userInfo", JSON.stringify(data));
};
export default asyncStorageUserInfo;
