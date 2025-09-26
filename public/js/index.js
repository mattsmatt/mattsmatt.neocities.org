document.addEventListener("DOMContentLoaded", function () {
  const loaderWrapper = document.getElementById("loader-wrapper");

  setTimeout(() => {
    // Add a class to hide the loader
    loaderWrapper.classList.add("hidden");
  }, 3000);

  // Optionally, remove the loader from the DOM after the animation finishes
  loaderWrapper.addEventListener("transitionend", function () {
    loaderWrapper.remove();
  });
});

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

animateDots("loadingText", 3, 500);
