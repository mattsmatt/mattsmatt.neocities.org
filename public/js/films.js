const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlZWE4ZTYxOTlmMTI2NTBiNTljZWM0YzFhMmYwNGI0YSIsIm5iZiI6MTc1MzMwMDE1NC45MjIsInN1YiI6IjY4ODEzY2JhYjk0ZTY2N2Y4YjUyOWRjMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XPnhGHiOnpv6fnRvg6oySE24kxZbWyq4WWyPXfqzYsY",
  },
};

fetch(
  "https://api.themoviedb.org/4/account/68813cbab94e667f8b529dc1/movie/favorites?page=1&language=en-US&sort_by=created_at.asc",
  options
)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((item) => {
      const filmDiv = document.createElement("div");
      filmDiv.className = "item tooltip";

      const tooltipText = document.createElement("div");
      tooltipText.className = "tooltiptext";

      const poster = document.createElement("img");
      poster.src = "https://image.tmdb.org/t/p/w1280/" + item["poster_path"];
      filmDiv.appendChild(poster);

      const title = document.createElement("div");
      title.textContent = item["title"];
      tooltipText.appendChild(title);

      const year = document.createElement("div");
      year.textContent = `(${new Date(item["release_date"]).getFullYear()})`;
      year.className = "subheading";
      tooltipText.appendChild(year);

      filmDiv.appendChild(tooltipText);

      container = document.getElementById("films-container");
      container.appendChild(filmDiv);
    });
  })
  .catch((err) => console.error(err));

fetch(
  "https://api.themoviedb.org/4/account/68813cbab94e667f8b529dc1/tv/favorites?page=1&language=en-US&sort_by=created_at.asc",
  options
)
  .then((res) => res.json())
  .then((res) => {
    res.results.forEach((item) => {
      const tvDiv = document.createElement("div");
      tvDiv.className = "item tooltip";

      const tooltipText = document.createElement("div");
      tooltipText.className = "tooltiptext";

      const poster = document.createElement("img");
      poster.src = "https://image.tmdb.org/t/p/w1280/" + item["poster_path"];
      tvDiv.appendChild(poster);

      const title = document.createElement("div");
      title.textContent = item["name"];
      tooltipText.appendChild(title);

      const year = document.createElement("div");
      year.textContent = `(${new Date(item["first_air_date"]).getFullYear()})`;
      year.className = "subheading";
      tooltipText.appendChild(year);

      tvDiv.appendChild(tooltipText);

      container = document.getElementById("tv-container");
      container.appendChild(tvDiv);

      // console.log(item);
    });
  })
  .catch((err) => console.error(err));
