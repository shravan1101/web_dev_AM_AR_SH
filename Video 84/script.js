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

  // Build each row to match the reference layout: icon + song text on the left, Play Now CTA on the right.
  for (const song of songs) {
    songUL.innerHTML += `<li class="song-item">
      <div class="song-meta">
        <img src="music.svg" class="song-icon" alt="music" />
        <div class="text-container">
          <div class="song-name">${decodeURIComponent(song)}</div>
          <div class="song-artist">song Artist</div>
        </div>
      </div>

      <div class="playnow">
        <span>Play Now</span>
        <img src="play-button.svg" class="invert play-icon" alt="play_button" />
      </div>
    </li>`;
  }

  // play the first song
  var audio = new Audio(songs[0]);
  // audio play
  audio.addEventListener("loadeddata", () => {
    console.log(audio.duration, audio.currentSrc, audio.currentTime);
  });
}

main();
