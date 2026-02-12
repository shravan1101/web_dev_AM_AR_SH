console.log("Weather API");

const btn = document.querySelector("#btn1");
const error = document.querySelector(".error");
const weather = document.querySelector(".weather");

const input = document.querySelector("input");
async function weatherloc(city) {
  console.log("Searching for", city);
  try {
    const gu = `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json`;
    const res = await fetch(gu);
    if (!res.ok) throw new Error("Network Error");
    const data = await res.json();
    if (!data.results || data.results.length == 0) {
      throw new Error("City not found ");
    }

    const lat = data.results[0].latitude;
    const lon = data.results[0].longitude;
    const cn = data.results[0].name;

    const wu = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    const res2 = await fetch(wu);
    if (!res2.ok) throw new Error("Network Error");
    const data2 = await res2.json();
    document.querySelector(".c").textContent ="City:"+ cn;
    document.querySelector(".ws").textContent ="Wind speed:"+
      data2.current_weather.windspeed + "Km/hr";
    document.querySelector(".t").textContent ="Temperature:"+
      data2.current_weather.temperature + "Degree C";

    document.querySelector(".weather").style.display = "flex";
    document.querySelector(".error").style.display = "none";
  } catch (err) {
    console.error("Error..", err.message);
    document.querySelector(".error").style.display = "flex";
    document.querySelector(".error p").innerHTML = error.message;
    document.querySelector(".weather").style.display = "none";
  }
}

btn.addEventListener("click", () => {
  console.log("Button Clicked");
  weatherloc(input.value);
});
