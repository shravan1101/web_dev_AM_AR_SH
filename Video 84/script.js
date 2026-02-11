// Fetch the directory listing and collect mp3 filenames.
let songUL;
async function getsong() {
  // Use a relative path so it works regardless of the local server port.
  let response = await fetch("song/");
  let data = await response.text();
  let div = document.createElement("div");
  div.innerHTML = data;
  let a = div.getElementsByTagName("a");
  let songs = [];
  for (let i = 0; i < a.length; i++) {
    const element = a[i];
    if (element.href.endsWith(".mp3")) {
      // Store decoded names once to avoid double-encoding later.
      songs.push(decodeURIComponent(element.href.split("/song/")[1]));
    }
  }
  return songs;
}

// Keep a single audio instance so multiple clicks don't overlap.
let currentAudio = null;
let playBtnIcon = null;
let songInfoEl = null;
let songTimeEl = null;
let seekBar = null;
let seekCircle = null;

const formatTitle = (track) =>
  track
    .replace(/\.mp3$/i, "")
    .replace(/_/g, " ")
    .trim();

const formatTime = (sec) => {
  if (!isFinite(sec)) return "00:00";
  const m = Math.floor(sec / 60)
    .toString()
    .padStart(2, "0");
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const playMusic = (track, { autoplay = true } = {}) => {
  currentAudio?.pause();
  currentAudio = new Audio(`song/${encodeURIComponent(track)}`);

  // Update UI when metadata is ready
  currentAudio.addEventListener("loadedmetadata", () => {
    songTimeEl.textContent = `${formatTime(0)} / ${formatTime(currentAudio.duration)}`;
    seekCircle.style.left = "0%";
  });

  // Progress + time updates
  currentAudio.addEventListener("timeupdate", () => {
    const pct =
      currentAudio.duration > 0
        ? (currentAudio.currentTime / currentAudio.duration) * 100
        : 0;
    seekCircle.style.left = `${pct}%`;
    songTimeEl.textContent = `${formatTime(currentAudio.currentTime)} / ${formatTime(currentAudio.duration)}`;
  });

  // Reset icon at end
  currentAudio.addEventListener("ended", () => {
    if (playBtnIcon) playBtnIcon.src = "play.svg";
  });

  if (autoplay) {
    currentAudio.play();
    if (playBtnIcon) playBtnIcon.src = "pause.svg";
  } else {
    if (playBtnIcon) playBtnIcon.src = "play.svg";
  }

  // Show nicely formatted title (strip .mp3)
  const prettyName = formatTitle(track);
  if (songInfoEl) songInfoEl.textContent = prettyName;
  if (songTimeEl) songTimeEl.textContent = "00:00 / 00:00";
};

async function main() {
  // get this list of all the songs
  let songs = await getsong();
  console.log(songs);

  // cache UI hooks
  songInfoEl = document.querySelector(".songinfo");
  songTimeEl = document.querySelector(".songtime");
  seekBar = document.querySelector(".seekbar");
  seekCircle = seekBar.querySelector(".circle");

  songUL = document.querySelector(".songlist").getElementsByTagName("ul")[0];
  songUL.innerHTML = "";

  // Build each row to match the reference layout: icon + song text on the left, Play Now CTA on the right.
  for (const song of songs) {
    songUL.innerHTML += `<li class="song-item" data-file="${song}">
      <div class="song-meta">
        <img src="music.svg" class="song-icon" alt="music" />
        <div class="text-container">
          <div class="song-name">${song}</div>
          <div class="song-artist">song Artist</div>
        </div>
      </div>

      <div class="playnow">
        <span>Play Now</span>
        <img src="play-button.svg" class="invert play-icon" alt="play_button" />
      </div>
    </li>`;
  }

  Array.from(
    document.querySelector(".songlist").getElementsByTagName("li"),
  ).forEach((e) => {
    e.addEventListener("click", (element) => {
      const file = e.dataset.file;
      console.log(file);
      playMusic(file);
    });
  });

  // Preload first song info (no autoplay) so UI isn't empty on refresh
  if (songs.length) {
    playMusic(songs[0], { autoplay: false });
  }

  // attach a event listener to play/pause main button
  const playBtn = document.querySelector(".all-play-btn");
  playBtnIcon = playBtn?.querySelector("img");
  playBtn?.addEventListener("click", () => {
    // If no track has been started yet, start with the first one
    if (!currentAudio) {
      playMusic(songs[0]);
      return;
    }

    if (currentAudio.paused) {
      currentAudio.play();
      if (playBtnIcon) playBtnIcon.src = "pause.svg";
    } else {
      currentAudio.pause();
      if (playBtnIcon) playBtnIcon.src = "play.svg";
    }
  });

  // allow clicking the bar to seek
  seekBar?.addEventListener("click", (e) => {
    if (!currentAudio || !isFinite(currentAudio.duration)) return;
    const rect = seekBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    currentAudio.currentTime = currentAudio.duration * pct;
  });

  document.querySelector(".hamburger").addEventListener("click", () => {
    document.querySelector(".left").style.left = "0";
  });

  document.querySelector(".cross").addEventListener("click", () => {
    document.querySelector(".left").style.left = "-130%";
  });

  // Function to get the index of the currently playing song
  const getCurrentSongIndex = () => {
    // If no song is playing, return -1
    if (!currentAudio) {
      return -1;
    }

    // Get the file name from the audio source URL
    const fullPath = currentAudio.src;
    const fileName = decodeURIComponent(fullPath.split("/").pop());

    // Return the index of this file name inside the songs array
    return songs.indexOf(fileName);
  };

  // When Previous button is clicked
  previous.addEventListener("click", () => {
    const currentIndex = getCurrentSongIndex();

    // If no valid song found, stop
    if (currentIndex === -1) return;

    let newIndex;

    // If current song is first one, go to last song
    if (currentIndex === 0) {
      newIndex = songs.length - 1;
    } else {
      newIndex = currentIndex - 1;
    }

    playMusic(songs[newIndex]);
  });

  // When Next button is clicked
  next.addEventListener("click", () => {
    const currentIndex = getCurrentSongIndex();

    // If no valid song found, stop
    if (currentIndex === -1) return;

    // Move to next song (loops back to start automatically)
    const newIndex = (currentIndex + 1) % songs.length;

    playMusic(songs[newIndex]);
  });
}

main();
