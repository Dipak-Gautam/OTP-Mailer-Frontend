const removeData = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
};
export default removeData;
