const folderPath = "./diary";

let diaryRecords = [
  {
    date: "October 4th, 2025",
    path: "Diary - 4-10-2025.html",
  },
];

function changeFrame(destination, event) {
  const frame = document.getElementById("frame");
  frame.contentWindow.location.replace(destination);
}

const indexContainer = document.getElementsByClassName("side-text-main")[0];

diaryRecords.forEach((record) => {
  const recordDiv = document.createElement("div");
  recordDiv.classList.add("hover-underline");
  recordDiv.innerHTML = record.date;
  recordDiv.addEventListener("click", () =>
    changeFrame("./diary/" + record.path)
  );

  indexContainer.appendChild(recordDiv);
});
