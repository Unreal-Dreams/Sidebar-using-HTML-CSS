const body = document.querySelector("body"),
  sidebar = body.querySelector("nav"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwitch = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});

let btn = document.getElementById("btn");
let image = document.getElementById("image");

btn.addEventListener("click", function () {
  console.log("Fetching image");
  fetch(
    "http://drive.google.com/uc?export=view&id=0B6MDk0wmJtrPdmpGQkdxUFI4ams"
  )
    .then((response) => {
      console.log(response);
      return response.blob();
    })
    .then((blob) => {
      console.log(blob);
      document.getElementById("image").src = URL.createObjectURL(blob);
    });
});
