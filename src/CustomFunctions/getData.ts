const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};

const getUserInfo = () => {
  const tempInfo = localStorage.getItem("userInfo");
  if (!tempInfo) return null;
  const userInfo = JSON.parse(tempInfo);
  return userInfo;
};

export { getToken };
export { getUserInfo };
