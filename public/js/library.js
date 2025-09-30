const rippleContainer = document.querySelector(".ripple-container");

function createRandomRipple() {
  const ripple = document.createElement("div");
  ripple.classList.add("ripple");

  // Random position within the container
  const containerWidth = rippleContainer.offsetWidth;
  const containerHeight = rippleContainer.offsetHeight;
  const randomX = Math.random() * containerWidth;
  const randomY = Math.random() * containerHeight;

  // Random size for the ripple
  const randomSize = Math.random() * 100 + 50; // Between 50px and 150px

  ripple.style.left = `${randomX - randomSize / 2}px`;
  ripple.style.top = `${randomY - randomSize / 2}px`;
  ripple.style.width = `${randomSize}px`;
  ripple.style.height = `${randomSize}px`;

  rippleContainer.appendChild(ripple);

  // Remove the ripple after the animation ends
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
}

// Create a new ripple every second (adjust interval as needed)
setInterval(createRandomRipple, 1000);
