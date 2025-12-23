function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve("Script loaded successfully");
    script.onerror = () => reject("Failed to load script");

    document.body.appendChild(script);
  });
}

async function load_my_script() {
  try {
    const message = await loadScript("test.js"); // it will wait until promise is resolved
    alert(message);
  } catch (error) {
    alert(error);
  }
}
load_my_script();
