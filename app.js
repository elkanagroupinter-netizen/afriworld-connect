if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("service-worker.js")
      .then(() => {
        console.log("Service Worker enregistré");
      })
      .catch(error => {
        console.error("Erreur Service Worker :", error);
      });
  });
}
