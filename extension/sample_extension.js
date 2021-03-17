const fetchAPI = async () => {
  const result = await chrome.system;
  alert(result);
};
setInterval(fetchAPI, 30000);
chrome.runtime.onMessageExternal.addListener((message, sender, response) => {
  // メッセージ受信処理
  // レスポンスを返す
  console.log(message);
  response(responseMessage);
});
