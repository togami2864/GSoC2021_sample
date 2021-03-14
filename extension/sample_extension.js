const featchAPI = async () => {
  const result = await chrome.system;
  alert(result);
};
setInterval(feachAPI, 30000);
