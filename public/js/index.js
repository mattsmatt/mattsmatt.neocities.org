const hoverArea = document.getElementById("hoverArea");
var hoverSound;

function animateDots(elementId, maxDots, interval) {
  const element = document.getElementById(elementId);
  let dotCount = 0;

  setInterval(() => {
    dotCount = (dotCount % maxDots) + 1; // Cycle through 1 to maxDots
    element.textContent = ":now entering" + ".".repeat(dotCount);
    if (dotCount == 3) dotCount = 0;
    // console.log(dotCount);
  }, interval);
}

function init() {
  const loaderWrapper = document.getElementById("loader-wrapper");
  if (loaderWrapper.classList.contains("hidden")) {
    loaderWrapper.classList.remove("hidden");
  }

  hoverSound = new Audio(
    "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onMouseEnter.mp3"
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

document.addEventListener("DOMContentLoaded", init());

animateDots("loadingText", 3, 500);
