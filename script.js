if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./service-worker.js")
    .then(function (registration) {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(function (error) {
      console.log("Service worker registration failed, error:", error);
    });
}

window.addEventListener("beforeinstallprompt", (event) => {
  console.log("👍", "beforeinstallprompt", event);
  window.deferredPrompt = event;
  divInstall.classList.toggle("hidden", false);
});

butInstall.addEventListener("click", async () => {
  console.log("👍", "butInstall-clicked");
  const promptEvent = window.deferredPrompt;
  if (!promptEvent) {
    return;
  }
  promptEvent.prompt();
  const result = await promptEvent.userChoice;
  console.log("👍", "userChoice", result);
  window.deferredPrompt = null;
  divInstall.classList.toggle("hidden", true);
});

window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
  window.deferredPrompt = null;
});

//送信
const button = document.getElementById("send");
const receiver = document.getElementById("recieve");
button.addEventListener("click", () => {
  var editorExtensionId = " cchlfodlokmandokbcbdnccndllpkiak";
  chrome.runtime.sendMessage(
    editorExtensionId,
    { openUrlInEditor: url },
    function (response) {
      if (!response.success) handleError(url);
    }
  );
});

//受信
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  console.log(request.message);
  receiver.innerHTML = "success!!";
});
