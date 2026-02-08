let url = "https://worldtimeapi.org/api/timezone/Asia/Kolkata";

async function getDta(url) {
  const r = await fetch(url);
  const data = await r.json(); // conert to json file
  return data;
}

async function main() {
  let prom = await getDta(url);
  console.log(prom);
}

main();
