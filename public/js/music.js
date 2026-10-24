const music = [
  {
    album: "Since I Left You",
    artist: "The Avalanches",
    image: "since i left you.jpg",
  },
  {
    album: "Somewhere City",
    artist: "Origami Angel",
    image: "somewhere city.jpg",
  },
  {
    album: "Love/Hate",
    artist: "The-Dream",
    image: "love_hate.jpg",
  },
  {
    album: "Walking Wounded",
    artist: "Everything but the Girl",
    image: "walking wounded.jpg",
  },
  {
    album: "Blonde on Blonde",
    artist: "Bob Dylan",
    image: "blonde on blonde.jpg",
  },
  {
    album: "Voodoo",
    artist: "D'Angelo",
    image: "voodoo.png",
  },
  {
    album: "Loveless",
    artist: "My Bloody Valentine",
    image: "loveless.jpg",
  },
  {
    album: "Kaputt",
    artist: "Destroyer",
    image: "kaputt.jpg",
  },
  {
    album: "Introspective",
    artist: "Pet Shop Boys",
    image: "introspective.png",
  },
  {
    album: "Details",
    artist: "Frou Frou",
    image: "details.jpg",
  },
  {
    album: "Love Deluxe",
    artist: "Sade",
    image: "love deluxe.jpg",
  },
  {
    album: "Lesser Matters",
    artist: "The Radio Dept.",
    image: "Lesser Matters.jpg",
  },
  {
    album: "Sunflower",
    artist: "The Beach Boys",
    image: "sunflower.png",
  },
  {
    album: "Ys",
    artist: "Joanna Newsom",
    image: "ys.jpg",
  },
  {
    album: "The Lioness",
    artist: "Songs: Ohia",
    image: "The Lioness.jpg",
  },
];

music.forEach((item) => {
  const musicDiv = document.createElement("div");
  musicDiv.className = "item tooltip";

  const album = document.createElement("div");
  album.textContent = item["album"];

  const artist = document.createElement("div");
  artist.textContent = item["artist"];
  artist.className = "subheading";

  const tooltipText = document.createElement("div");
  tooltipText.className = "tooltiptext";

  // fetch(
  //   `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a5f09f2dd441c3f7f1e8f4f05e8ef663&artist=${item["artist"]}&album=${item["album"]}&format=json`
  // )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     const poster = document.createElement("img");
  //     poster.src = res.album.image.filter((img) => {
  //       return img.size == "extralarge";
  //     })[0]["#text"];
  //     // console.log(
  //     //   res.album.image.filter((img) => {
  //     //     return img.size == "extralarge";
  //     //   })
  //     // );
  //     musicDiv.appendChild(poster);
  //     tooltipText.appendChild(album);
  //     tooltipText.appendChild(artist);
  //     musicDiv.appendChild(tooltipText);
  //   })
  //   .catch((err) => console.error(err));

  const poster = document.createElement("img");
  poster.src = "./assets/images/library/music/" + item["image"];

  musicDiv.appendChild(poster);
  tooltipText.appendChild(album);
  tooltipText.appendChild(artist);
  musicDiv.appendChild(tooltipText);

  container = document.getElementById("music-container");
  container.appendChild(musicDiv);
});
