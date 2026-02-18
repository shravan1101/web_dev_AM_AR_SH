// --- Config ---
// Point this to whichever subfolder under /song you want to load on page start.
const defaultFolder = "song/NCS";

// --- State ---
let activeFolder = defaultFolder;
let songs = [];
let currentAudio = null;
let lastVolume = 1;
let pendingMute = false; // remember mute intent before audio exists

// --- DOM refs (set in main) ---
let songUL;
let songInfoEl;
let currentTimeEl;
let durationTimeEl;
let seekBar;
let seekCircle;
let volumeSlider;
let volumeIcon;
let playBtnIcon;

// --- DOM helpers ---
const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => Array.from(document.querySelectorAll(sel));

const cacheDom = () => {
  songInfoEl = qs(".songinfo");
  currentTimeEl = qs(".current-time");
  durationTimeEl = qs(".duration-time");
  seekBar = qs(".seekbar");
  seekCircle = seekBar?.querySelector(".circle");
  volumeSlider = qs(".volume-slider");
  volumeIcon = qs(".volume-icon");
  songUL = qs(".songlist ul");
  playBtnIcon = qs(".all-play-btn img");
};

// --- Data helpers ---
let songsManifest = null;

const loadManifest = async () => {
  if (songsManifest) return songsManifest;
  try {
    const res = await fetch("songs_manifest.json");
    if (!res.ok) throw new Error("Manifest not found");
    songsManifest = await res.json();
  } catch (err) {
    console.error("Could not load manifest", err);
  }
  return songsManifest;
};

const fetchSongs = async (folderPath) => {
  await loadManifest();
  if (!songsManifest) return [];

  // folderPath might be "song/CS" or just "CS"
  // The manifest keys are just the folder names like "CS", "NCS"
  const folderName = folderPath.split("/").pop();

  const album = songsManifest.albums[folderName];
  if (!album) return [];

  return album.songs;
};

const displayAlbums = async () => {
  const container = qs(".cardcontainer");
  if (!container) return;

  await loadManifest();
  if (!songsManifest) return;

  const albums = songsManifest.albums;
  container.innerHTML = "";

  for (const [folder, data] of Object.entries(albums)) {
    const title = data.title || folder;
    const description = data.description || "Album";
    const coverSrc = data.cover || "logo.svg"; // Fallback if no cover

    container.insertAdjacentHTML(
      "beforeend",
      `
        <div data-folder="${folder}" class="card">
          <div class="play toggle">
            <svg width="56" height="56" viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg">
              <circle cx="28" cy="28" r="22" fill="#1DB954" />
              <path d="M23 17 L23 39 L39 28 Z" fill="#000000" />
            </svg>
          </div>
  
          <img src="${coverSrc}" alt="${title}" />
  
          <h2>${title}</h2>
          <p style="font-size: 16px">${description}</p>
        </div>
        `,
    );
  }
};

const renderSongs = (list) => {
  songs = list;
  songUL.innerHTML = "";

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

  Array.from(songUL.getElementsByTagName("li")).forEach((row) => {
    row.addEventListener("click", () => playMusic(row.dataset.file));
  });
};

// --- Formatters ---
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

// --- Playback ---
const playMusic = (track, { autoplay = true } = {}) => {
  currentAudio?.pause();
  currentAudio = new Audio(`${activeFolder}/${encodeURIComponent(track)}`);
  currentAudio.volume = pendingMute ? 0 : lastVolume;
  currentAudio.muted = pendingMute;

  currentAudio.addEventListener("loadedmetadata", () => {
    durationTimeEl.textContent = formatTime(currentAudio.duration);
    currentTimeEl.textContent = "00:00";
    seekCircle.style.left = "0%";
  });

  currentAudio.addEventListener("timeupdate", () => {
    const pct =
      currentAudio.duration > 0
        ? (currentAudio.currentTime / currentAudio.duration) * 100
        : 0;
    seekCircle.style.left = `${pct}%`;
    currentTimeEl.textContent = formatTime(currentAudio.currentTime);
    durationTimeEl.textContent = formatTime(currentAudio.duration);
  });

  currentAudio.addEventListener("ended", () => {
    if (playBtnIcon) playBtnIcon.src = "play.svg";
    currentTimeEl.textContent = durationTimeEl.textContent;
  });

  if (autoplay) {
    currentAudio.play();
    if (playBtnIcon) playBtnIcon.src = "pause.svg";
  } else if (playBtnIcon) {
    playBtnIcon.src = "play.svg";
  }

  const prettyName = formatTitle(track);
  songInfoEl.textContent = prettyName;
  currentTimeEl.textContent = "00:00";
  durationTimeEl.textContent = "00:00";
};

const getCurrentSongIndex = () => {
  if (!currentAudio) return -1;
  const fileName = decodeURIComponent(currentAudio.src.split("/").pop());
  return songs.indexOf(fileName);
};

// --- UI bindings ---
const bindPlaylistCards = () => {
  qsa(".card").forEach((card) => {
    card.addEventListener("click", async () => {
      const folderName = card.dataset.folder;
      // Update activeFolder so playMusic uses the correct path
      activeFolder = `song/${folderName}`;
      const list = await fetchSongs(activeFolder);
      renderSongs(list);
      // do not autoplay; just load list and wait for user to click a track
    });
  });
};

const bindTransportControls = () => {
  const playBtn = qs(".all-play-btn");

  playBtn?.addEventListener("click", () => {
    if (!currentAudio) {
      if (songs.length) playMusic(songs[0]);
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

  const previous = qs("#previous");
  const next = qs("#next");

  previous?.addEventListener("click", () => {
    const idx = getCurrentSongIndex();
    if (idx === -1) return;
    const newIndex = idx === 0 ? songs.length - 1 : idx - 1;
    playMusic(songs[newIndex]);
  });

  next?.addEventListener("click", () => {
    const idx = getCurrentSongIndex();
    if (idx === -1) return;
    const newIndex = (idx + 1) % songs.length;
    playMusic(songs[newIndex]);
  });

  seekBar?.addEventListener("click", (e) => {
    if (!currentAudio || !isFinite(currentAudio.duration)) return;
    const rect = seekBar.getBoundingClientRect();
    const pct = (e.clientX - rect.left) / rect.width;
    currentAudio.currentTime = currentAudio.duration * pct;
  });

  volumeSlider?.addEventListener("input", (e) => {
    const vol = Math.min(1, Math.max(0, parseFloat(e.target.value)));
    lastVolume = vol;
    pendingMute = vol === 0;
    if (currentAudio) {
      currentAudio.muted = false;
      currentAudio.volume = vol;
    }
    volumeIcon?.classList.toggle("muted", vol === 0);
  });

  const toggleMute = () => {
    const noPlayer = !currentAudio;
    const isMuted = noPlayer
      ? pendingMute || lastVolume === 0
      : currentAudio.muted || currentAudio.volume === 0;

    if (isMuted) {
      const restore = lastVolume > 0 ? lastVolume : 0.5;
      pendingMute = false;
      if (!noPlayer) {
        currentAudio.muted = false;
        currentAudio.volume = restore;
      }
      if (volumeSlider) volumeSlider.value = restore;
      volumeIcon?.classList.toggle("muted", restore === 0);
    } else {
      if (!noPlayer) {
        lastVolume = currentAudio.volume || 0.5;
        currentAudio.muted = true;
        currentAudio.volume = 0;
      }
      pendingMute = true;
      if (volumeSlider) volumeSlider.value = 0;
      volumeIcon?.classList.add("muted");
    }
  };

  volumeIcon?.addEventListener("click", toggleMute);
  volumeIcon?.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleMute();
    }
  });
};

// --- Init ---
async function main() {
  cacheDom();

  await displayAlbums();
  bindTransportControls();
  bindPlaylistCards();

  const initialSongs = await fetchSongs(activeFolder);
  renderSongs(initialSongs);

  if (songs.length) {
    playMusic(songs[0], { autoplay: false }); // preload but don't auto-start
  }

  if (volumeSlider) volumeSlider.value = lastVolume;
  volumeIcon?.classList.toggle("muted", pendingMute || lastVolume === 0);
}

main();
