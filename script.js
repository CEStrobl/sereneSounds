let vid = document.getElementById("myVideo")
let title = document.getElementById("title")
let app = document.getElementById("app")

let random = ""

let bgsTitle = ["snowfall", "ocean", "clouds", "autumntrees", "waterdrop"]

function randomTitle() {
    let r = Math.floor(Math.random() * bgsTitle.length)
    vid.src = "img/live/" + bgsTitle[r] + ".mp4"
    random = bgsTitle[r]
}
randomTitle()

function hideTitle() {
    title.style.opacity = 0;
    setTimeout(() => {
        title.style.display = "none";
    }, 600);
}
  
function showElement(x) {
    hideTitle();
    x.style.opacity = 0;
    setTimeout(() => { 
      x.style.display = "flex";
    }, 600);
    setTimeout(() => {
      x.style.opacity = 1;
    }, 700);
}