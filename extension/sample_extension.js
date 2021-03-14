const fetchAPI = async () => {
  const result = await chrome.system;
  alert(result);
};
setInterval(fetchAPI, 30000);
