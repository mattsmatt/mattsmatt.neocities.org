var hoverSound;

function init() {
  const loaderWrapper = document.getElementById("loader-wrapper");
  const html = document.getElementById("library-content");

  if (loaderWrapper.classList.contains("hidden")) {
    loaderWrapper.classList.remove("hidden");
  }

  hoverSound = new Audio(
    "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onClick.mp3"
  );
  hoverSound.volume = 0.5;

  setTimeout(() => {
    // Add a class to hide the loader
    loaderWrapper.classList.add("hidden");

    if (html != null) {
      html.classList.add("overflow-auto");
    }
  }, 3000);

  // // Optionally, remove the loader from the DOM after the animation finishes
  // loaderWrapper.addEventListener("transitionend", function () {
  //   loaderWrapper.remove();
  // });
}

function redirect(destination) {
  const loaderWrapper = document.getElementById("loader-wrapper");

  hoverSound.play();

  if (loaderWrapper.classList.contains("hidden")) {
    loaderWrapper.classList.remove("hidden");
  }

  setTimeout(() => {
    window.location.href = destination;
  }, 3000);
}

// function playOnFinishLoadingAudio() {
//   var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
//   var source = audioCtx.createBufferSource();
//   var xhr = new XMLHttpRequest();
//   xhr.open(
//     "GET",
//     "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onFinishLoading.mp3"
//   );
//   xhr.responseType = "arraybuffer";
//   xhr.addEventListener("load", function (r) {
//     audioCtx.decodeAudioData(xhr.response, function (buffer) {
//       source.buffer = buffer;
//       source.connect(audioCtx.destination);
//       source.loop = false;
//     });
//     source.start(0);
//   });
//   xhr.send();
// }

window.addEventListener("pageshow", function (e) {
  init();
});
