function animateDots(elementId, maxDots, interval) {
  const element = document.getElementById(elementId);
  let dotCount = 0;

  setInterval(() => {
    dotCount = (dotCount % maxDots) + 1; // Cycle through 1 to maxDots
    element.textContent = ":now entering" + ".".repeat(dotCount);
  }, interval);
}

animateDots("loadingText", 3, 500);
