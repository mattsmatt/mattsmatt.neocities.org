const images = [
  { id: 1, img: "chiikawa.png" },
  { id: 2, img: "susie-deltarune.gif" },
  { id: 3, img: "the-mission.png" },
  { id: 4, img: "tatami-galaxy.png" },
  { id: 5, img: "resurrection.jpg" },
  { id: 6, img: "azumanga-daioh.jpg" },
  { id: 7, img: "hollow-knight.jpg" },
  { id: 8, img: "chow-yun-fat-a-better-tomorrow.gif" },
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Get all images and insert the clicked image inside the modal
// Get the content of the image description and insert it inside the modal image caption
var moodboard = document.getElementById("moodboard");
var moodboardImg = moodboard.getElementsByTagName("img");
var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
var i;
for (i = 0; i < moodboardImg.length; i++) {
  moodboardImg[i].onclick = function () {
    modal.style.display = "flex";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    // captionText.innerHTML = this.nextElementSibling.innerHTML;
  };
}
