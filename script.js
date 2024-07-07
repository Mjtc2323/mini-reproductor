const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  {/* 1 */
    title: "Aveces",
    name: "Al2 el aldeano",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Al2%20El%20Aldeano%20-%20A%20Veces%20(LETRA).mp3",
  },
  {/* 2 */
    title: "Como Tiene Que Ser",
    name: "Arcangel",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Arcangel%20-%20Como%20Tiene%20Que%20Ser.mp3",
  },
  {/* 3 */
    title: "Nuestros Horarios",
    name: "Sabino",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Ferraz%20-%20Nuestros%20Horarios%20feat.%20Sabino%20(Audio%20Oficial).mp3",
  },
  {/* 4 */
    title: "Follow You",
    name: "Imagine Dragons",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Imagine%20Dragons%20-%20Follow%20You%20(Lyric%20Video).mp3",
  },
  {/* 5 */
    title: "You're the Inspiration",
    name: "Chicago",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Chicago%20-%20You're%20The%20Inspiration%20_%20Lyrics-Letra%20_%20Subtitulado%20al%20Espa%C3%B1ol.mp3",
  },

  {/* 6 */
    title: "La Que Me Gusta",
    name: " Los Amigos Invisibles",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/La%20Que%20Me%20Gusta%20-%20Los%20Amigos%20Invisibles%20(Official%20Music%20Video).mp3",
  },
  {/* 7 */
    title: "Kiss Me",
    name: "Magic!",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/MAGIC!%20-%20Kiss%20Me%20(Official%20Video).mp3",
  },
  {/* 8 */
    title: "Me Gusta",
    name: "El Chojin",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Me%20Gusta.mp3",
  },
   {/* 9 */
    title: "Mi Mundo Preferido",
    name: "Piter-G",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Piter-G%20-%20Mi%20Mundo%20Preferido%20(Prod.%20por%20Piter-G).mp3",
  },
   {/* 10 */
    title: "Confia",
    name: "Rafa Espino FT Piter-G",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Rafa%20Espino%20ft%20Piter-G%20-%20Conf%C3%ADa%20(V%C3%ADdeo%20Oficial).mp3",
  },
   {/* 11 */
    title: "Relacion",
    name: "Apache",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Relaci%C3%B3n.mp3",
  },
   {/* 12 */
    title: "Dejalo Que Fluya",
    name: "Residente FT Arcangel",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Residente,%20Arc%C3%A1ngel%20-%20Que%20Fluya%20(Visualizer).mp3",
  },
   {/* 13 */
    title: "Conmigo Siempre",
    name: "Sabino",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20-%20Conmigo%20Siempre.mp3",
  },
   {/* 14 */
    title: "Tu",
    name: "Sabino",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20-%20T%C3%BA.mp3",
  },
   {/* 15 */
    title: "Nuevequince",
    name: "Sabino",
    source:
      "https://github.com/Mjtc2323/musica1/raw/main/Sabino%20ft.%20Fer%20Casillas,%20Moha,%20Garam%20Mazala,%20Pizarro,%20Kike%20-%20Nuevequince%20(Official%20Music%20Video).mp3",
  },

];

let currentSongIndex = 3;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  song.addEventListener("loadeddata", function () {});
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 3,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});
