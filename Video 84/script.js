async function getsong() {
  let response = await fetch("http://127.0.0.1:5500/Video%2084/song/");
  let data = await response.text();
  let div = document.createElement("div");
  div.innerHTML = data;
  let a = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element.href.endsWith(".mp3")) {
      songs.push(element.href.split("/song/")[1]);
    }
  }
  return songs;
}

async function main() {
  // get this list of all the songs
  let songs = await getsong();
  console.log(songs);

  let songUL = document
    .querySelector(".songlist")
    .getElementsByTagName("ul")[0];
  songUL.innerHTML = "";
  for (const song of songs) {
    songUL.innerHTML += `<li>${decodeURIComponent(song)}</li>`;
  }

  // play the first song
  var audio = new Audio(songs[0]);
  // audio play
  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}

main();
