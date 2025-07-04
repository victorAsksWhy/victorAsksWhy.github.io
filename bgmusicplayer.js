const tracks = ['musicAirportLounge.mp3','musicBackbayLounge.mp3','musicCrinolineDreams.mp3','musicLateNightRadio.mp3','musicUltralounge.mp3'];
let currentTrack = 0;
let isMuted = true;

let audio = new Audio(tracks[currentTrack]);
audio.loop = false;
audio.muted = true;       // start muted
audio.volume = 1.0;

// When one track ends, move to next
audio.addEventListener("ended", () => {
  currentTrack = (currentTrack + 1) % tracks.length;
  audio.src = tracks[currentTrack];
  audio.muted = isMuted;
  audio.play();
});

// Start playing immediately (muted) after user interaction
document.addEventListener("click", function init() {
  audio.play();           // Chrome allows muted autoplay
  document.removeEventListener("click", init); // only run once
});

// Mute/unmute toggle
document.getElementById("musicToggle").addEventListener("click", () => {
  isMuted = !isMuted;
  audio.muted = isMuted;
  document.getElementById("musicToggle").textContent = isMuted ? "Unmute" : "Mute";
});