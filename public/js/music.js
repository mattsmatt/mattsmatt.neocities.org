const music = [
  {
    album: "Since I Left You",
    artist: "The Avalanches",
    image: "",
  },
  {
    album: "Charmed",
    artist: "DJ Sabrina The Teenage DJ",
    image: "",
  },
  {
    album: "Pet Sounds",
    artist: "The Beach Boys",
    image: "",
  },
  {
    album: "ファンファーレ",
    artist: "advantage Lucy",
    image: "",
  },
  {
    album: "Somewhere City",
    artist: "Origami Angel",
    image: "",
  },
  {
    album: "Love/Hate",
    artist: "The-Dream",
    image: "",
  },
  {
    album: "Walking Wounded",
    artist: "Everything but the Girl",
    image: "",
  },
  {
    album: "Blonde on Blonde",
    artist: "Bob Dylan",
    image: "",
  },
  {
    album: "Centralismo",
    artist: "Sore",
    image: "",
  },
  {
    album: "Voodoo",
    artist: "D'Angelo",
    image: "",
  },
  {
    album: "Loveless",
    artist: "My Bloody Valentine",
    image: "",
  },
  {
    album: "Kaputt",
    artist: "Destroyer",
    image: "",
  },
  {
    album: "Introspective",
    artist: "Pet Shop Boys",
    image: "",
  },
  {
    album: "Details",
    artist: "Frou Frou",
    image: "",
  },
  {
    album: "Love Deluxe",
    artist: "Sade",
    image: "",
  },
  {
    album: "Lesser Matters",
    artist: "The Radio Dept.",
    image: "",
  },
  {
    album: "Sunflower",
    artist: "The Beach Boys",
    image: "",
  },
  {
    album: "Aja",
    artist: "Steely Dan",
    image: "",
  },
  {
    album: "Ys",
    artist: "Joanna Newsom",
    image: "",
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

  fetch(
    `http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=a5f09f2dd441c3f7f1e8f4f05e8ef663&artist=${item["artist"]}&album=${item["album"]}&format=json`
  )
    .then((res) => res.json())
    .then((res) => {
      const poster = document.createElement("img");
      poster.src = res.album.image.filter((img) => {
        return img.size == "extralarge";
      })[0]["#text"];
      // console.log(
      //   res.album.image.filter((img) => {
      //     return img.size == "extralarge";
      //   })
      // );
      musicDiv.appendChild(poster);
      tooltipText.appendChild(album);
      tooltipText.appendChild(artist);
      musicDiv.appendChild(tooltipText);
    })
    .catch((err) => console.error(err));

  container = document.getElementById("music-container");
  container.appendChild(musicDiv);
});
