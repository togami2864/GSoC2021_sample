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
  // divInstall.classList.toggle("hidden", false);
});

// butInstall.addEventListener("click", async () => {
//   console.log("👍", "butInstall-clicked");
//   const promptEvent = window.deferredPrompt;
//   if (!promptEvent) {
//     return;
//   }
//   promptEvent.prompt();
//   const result = await promptEvent.userChoice;
//   console.log("👍", "userChoice", result);
//   window.deferredPrompt = null;
//   divInstall.classList.toggle("hidden", true);
// });

window.addEventListener("appinstalled", (event) => {
  console.log("👍", "appinstalled", event);
  window.deferredPrompt = null;
});

document.addEventListener("csEvent", function (event) {
  const data = event.detail;
  console.log(data);
});
