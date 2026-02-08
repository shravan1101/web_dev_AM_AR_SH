let url =
  "https://newsapi.org/v2/everything?q=tesla&from=2026-01-08&sortBy=publishedAt&apiKey=fe9f46df4d604875bf20917e60579547";

async function getdata(url) {
  const response = await fetch(url);
  data = await response.json();
  console.log(data);
}

getdata(url);
