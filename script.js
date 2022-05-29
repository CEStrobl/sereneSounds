let vid = document.getElementById("myVideo")
let title = document.getElementById("title")
let app = document.getElementById("app")

let random = ""

let bgsTitle = ["snowfall", "ocean", "clouds", "autumntrees",]

let AudioLibrary = [waves, jbirds, rain1, night, runningwater, birdschirp, seagulls,
  wind, breakfast, cafe1, cafe2, fireplace, library, paper, rain2, storm, highway, river, mouse,
ocean, pencil1,pencil2, storm2, clock, page, typewriter, typing, ]

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


function toggleSound (checkID, sound) {
  if(checkID.checked === true) {
    sound.play()
  } else {
    sound.pause()
  }
}

function setVol(amount, target) {
  amount/=10
  target.volume = amount
  target.loop = true
}


function setAll() {
  for (let i = 0; i < AudioLibrary.length; i++) {
    const sound = AudioLibrary[i];
    sound.volume = 0.5
    sound.loop = true
  }
}
setAll()
