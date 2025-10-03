const rippleContainer = document.querySelector(".ripple-container");
let timeoutId;

function createRandomRipple() {
  const ripple1 = document.createElement("div");
  const ripple2 = document.createElement("div");
  const ripple3 = document.createElement("div");

  ripple1.classList.add("ripple");
  ripple1.classList.add("ripple-center");
  ripple2.classList.add("ripple");
  ripple3.classList.add("ripple");

  // Random position within the container
  const containerWidth = rippleContainer.offsetWidth;
  const containerHeight = rippleContainer.offsetHeight;
  const randomX = Math.random() * containerWidth;
  const randomY = Math.random() * containerHeight;

  // Random size for the ripple
  var randomSize = Math.random() * 125 + 25; // Between 25px and 150px

  ripple1.style.left = `${randomX - randomSize / 2}px`;
  ripple1.style.top = `${randomY - randomSize / 2}px`;
  ripple1.style.width = `${randomSize}px`;
  ripple1.style.height = `${randomSize}px`;

  randomSize += 30;
  ripple2.style.left = `${randomX - randomSize / 2}px`;
  ripple2.style.top = `${randomY - randomSize / 2}px`;
  ripple2.style.width = `${randomSize}px`;
  ripple2.style.height = `${randomSize}px`;

  randomSize += 30;
  ripple3.style.left = `${randomX - randomSize / 2}px`;
  ripple3.style.top = `${randomY - randomSize / 2}px`;
  ripple3.style.width = `${randomSize}px`;
  ripple3.style.height = `${randomSize}px`;

  rippleContainer.appendChild(ripple1);
  rippleContainer.appendChild(ripple2);
  rippleContainer.appendChild(ripple3);

  // Remove the ripple after the animation ends
  ripple1.addEventListener("animationend", () => {
    ripple1.remove();
  });
  ripple2.addEventListener("animationend", () => {
    ripple2.remove();
  });
  ripple3.addEventListener("animationend", () => {
    ripple3.remove();
  });
}

function cancelTimedAction() {
  if (timeoutId) {
    // Check if a timeout is currently active
    clearTimeout(timeoutId);
    console.log("Timed action cancelled. Timeout ID:", timeoutId);
    timeoutId = null; // Reset the ID after clearing
  } else {
    console.log("No active timed action to cancel.");
  }
}

function changeFrame(destination, event) {
  cancelTimedAction();
  const frame = document.getElementById("frame");

  const onFinishLoading = new Audio(
    "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onFinishLoading.mp3"
  );
  onFinishLoading.volume = 0.5;

  const onClick = new Audio(
    "https://github.com/mattsmatt/mattsmatt.neocities.org/raw/refs/heads/main/public/assets/audio/onClick.mp3"
  );
  onClick.volume = 0.5;

  onClick.play();

  const activeBtn = document.getElementsByClassName("btn-active");

  if (activeBtn.length != 0) {
    activeBtn[0].classList.remove("btn-active");
  }

  if (destination === "film") {
    frame.contentWindow.location.replace("./film.html");
  } else if (destination == "music") {
    frame.contentWindow.location.replace("./music.html");
  } else if (destination == "games") {
    frame.contentWindow.location.replace("./games.html");
  } else {
    frame.contentWindow.location.replace("./library-empty.html");
  }

  event.currentTarget.classList.add("btn-active");

  timeoutId = setTimeout(() => {
    onFinishLoading.play();
  }, 3500);
}

// Create a new ripple every second (adjust interval as needed)
setInterval(createRandomRipple, 1000);
