let text = [
  "Initialize hacking",
  "reading the files",
  "Injecting the virus tuji gand ra nischya",
  "Taking control of the system",
  "Hacking complete",
  "tubanje ga hacker ks chodda ",
];

async function main() {
  let clear = setInterval(() => {
    last = document.body.lastChild;
    if (last.innerHTML.endsWith("...")) {
      last.innerHTML = last.innerHTML.slice(0, last.innerHTML.length - 3);
    } else {
      last.innerHTML += ".";
    }
  }, 500);
  for (const item of text) {
    await additem(item);
  }
  const additem = async (item) => {
    await randomDelay();
    let div = document.createElement("div");
    div.innerHTML = item;
    document.body.appendChild(div);
  };

  function randomDelay() {
    return new Promise((resolve) => {
      let delay = 1 + 6 * Math.random(); // delay between 1 to 7 seconds
      setTimeout(() => {
        resolve();
      }, delay * 1000);
    });
  }

  await randomDelay();
  clearInterval(clear);
}

main();
