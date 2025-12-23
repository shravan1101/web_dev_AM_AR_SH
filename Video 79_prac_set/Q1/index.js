function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve("Script loaded successfully");
    script.onerror = () => reject("Failed to load script");

    document.body.appendChild(script);
  });
}

loadScript("test.js")
  .then((message) => {
    alert(message);
  })
  .catch((error) => {
    alert(error);
  });
