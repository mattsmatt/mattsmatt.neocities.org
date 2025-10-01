const images = [
  { id: 1, img: "chiikawa.png" },
  { id: 2, img: "susie-deltarune.gif" },
  { id: 3, img: "the-mission.png" },
  { id: 4, img: "tatami-galaxy.png" },
  { id: 5, img: "resurrection.jpg" },
  { id: 6, img: "azumanga-daioh.jpg" },
  { id: 7, img: "hollow-knight.jpg" },
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
