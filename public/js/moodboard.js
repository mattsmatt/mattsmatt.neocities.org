const images = [
  { id: 1, img: "Black_colour.jpg" },
  { id: 2, img: "Black_colour.jpg" },
  { id: 3, img: "Black_colour.jpg" },
  { id: 4, img: "Black_colour.jpg" },
  { id: 5, img: "Black_colour.jpg" },
  { id: 6, img: "Black_colour.jpg" },
  { id: 7, img: "Black_colour.jpg" },
];

images.forEach((item) => {
  const flexContainers = document.getElementsByClassName("moodboard-col");

  const img = document.createElement("img");
  img.src = "./assets/images/moodboard/images/" + item["img"];

  if (item["id"] % 3 == 1) {
    flexContainers[0].appendChild(img);
  } else if (item["id"] % 3 == 2) {
    flexContainers[1].appendChild(img);
  } else {
    flexContainers[2].appendChild(img);
  }
});
