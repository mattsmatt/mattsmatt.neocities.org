const music = [
  {
    title: "Katana Zero",
    year: 2019,
    image: "co1isp.jpeg",
  },
  {
    title: "Portal",
    year: 2007,
    image: "co1x7d.jpeg",
  },
  {
    title: "Spelunky 2",
    year: 2020,
    image: "co2f66.jpeg",
  },
  {
    title: "Neon White",
    year: 2022,
    image: "co2tgh.jpeg",
  },
  {
    title: "Celeste",
    year: 2018,
    image: "co3byy.jpeg",
  },
  {
    title: "Vib-Ribbon",
    year: 1999,
    image: "co6xgh.jpeg",
  },
  {
    title: "Pizza Tower",
    year: 2023,
    image: "co5uu1.jpeg",
  },
  {
    title: "Undertale",
    year: 2015,
    image: "co2855.jpeg",
  },
  {
    title: "Um Jammer Lammy",
    year: 2018,
    image: "coa4lg.jpeg",
  },
  {
    title: "Shovel Knight",
    year: 2014,
    image: "co6pup.jpg",
  },
];

music.forEach((item) => {
  const gameDiv = document.createElement("div");
  gameDiv.className = "item";

  const poster = document.createElement("img");
  poster.src = "./assets/images/games/" + item["image"];
  gameDiv.appendChild(poster);

  const title = document.createElement("div");
  title.textContent = item["title"];
  gameDiv.appendChild(title);

  const year = document.createElement("div");
  year.textContent = item["year"];
  year.className = "subheading";
  gameDiv.appendChild(year);

  container = document.getElementById("games-container");
  container.appendChild(gameDiv);
});
