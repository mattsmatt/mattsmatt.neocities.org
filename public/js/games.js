const games = [
  {
    title: "Katana Zero",
    year: 2019,
    image: "katana-zero.webp",
  },
  {
    title: "Spelunky 2",
    year: 2020,
    image: "spelunky-2.webp",
  },
  {
    title: "Neon White",
    year: 2022,
    image: "neon-white.webp",
  },
  {
    title: "Pizza Tower",
    year: 2023,
    image: "pizza-tower.webp",
  },
  {
    title: "Undertale",
    year: 2015,
    image: "undertale.webp",
  },
  {
    title: "Um Jammer Lammy",
    year: 2018,
    image: "um-jammer-lammy.webp",
  },
  {
    title: "Shovel Knight",
    year: 2014,
    image: "shovel-knight.webp",
  },
  {
    title: "Hollow Knight",
    year: 2017,
    image: "hollow-knight.webp",
  },
  {
    title: "Deltarune",
    year: 2025,
    image: "deltarune.webp",
  },
  {
    title: "DanceDanceRevolution EXTREME",
    year: 2002,
    image: "ddr-extreme.webp",
  },
  {
    title: "Life Is Strange",
    year: 2015,
    image: "life-is-strange.webp",
  },
];

games.forEach((item) => {
  const gameDiv = document.createElement("div");
  gameDiv.className = "item tooltip";

  const tooltipText = document.createElement("div");
  tooltipText.className = "tooltiptext";

  const poster = document.createElement("img");
  poster.src = "./assets/images/library/games/" + item["image"];
  gameDiv.appendChild(poster);

  const title = document.createElement("div");
  title.textContent = item["title"];
  tooltipText.appendChild(title);

  const year = document.createElement("div");
  year.textContent = item["year"];
  year.className = "subheading";
  tooltipText.appendChild(year);

  gameDiv.appendChild(tooltipText);

  container = document.getElementById("games-container");
  container.appendChild(gameDiv);
});
