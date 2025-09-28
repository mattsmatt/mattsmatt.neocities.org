var hoverSound;

function init() {
  const loaderWrapper = document.getElementById("loader-wrapper");
  if (loaderWrapper.classList.contains("hidden")) {
    loaderWrapper.classList.remove("hidden");
  }

  hoverSound = new Audio(
    "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onClick.mp3"
  );

  setTimeout(() => {
    // Add a class to hide the loader
    loaderWrapper.classList.add("hidden");
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

window.addEventListener("pageshow", function (e) {
  init();
});
