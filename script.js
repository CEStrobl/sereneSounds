let vid = document.getElementById("myVideo")
let vid2 = document.getElementById("myVideo3")
let title = document.getElementById("title")
let app = document.getElementById("app")

let random = ""

let bgsTitle = ["snowfall", "ocean", "clouds", "autumntrees", "beach4", "beach2", "castle",
"forest1", "forest3", "rain1", "rain3", "shop1", "trees3", "window1",
]

let snowfall = 0
let oceanBG = 0
let autumntrees = 0
let beach4 = 0
let castle = 0
let rain1BG = 0
let rain3 = 0
let shop1 = 0
let trees3 = 0
let window1 = 0

let enableAutoBG =  document.getElementById("autobg")



let AudioLibrary = [waves, jbirds, rain1, night, runningwater, birdschirp, seagulls,
  wind, cafe1, cafe2, fireplace, library, paper, rain2, storm, highway, river, mouse,
ocean, pencil1,pencil2, storm2, clock, page, typewriter, typing, ]

let jazz = [betonit, bread, soulandmind, nightfalling]

let piano = [childhood, enchanted, eternallove, purpose, undertow, warmmemories]

let ambience = [ethereal, filaments, fragments, jul]




let MusicLibrary = []

for (let i = 0; i < jazz.length; i++) {
  const j = jazz[i];
  MusicLibrary.push(j)
}
for (let o = 0; o < piano.length; o++) {
  const p = piano[o];
  MusicLibrary.push(p)
}
for (let e = 0; e < ambience.length; e++) {
  const a = ambience[e];
  MusicLibrary.push(a)
}


function randomTitle() {
    let r = Math.floor(Math.random() * bgsTitle.length)
    vid.src = "img/live/" + bgsTitle[r] + ".mp4"
    vid2.src = "img/live/" + bgsTitle[r] + ".mp4"
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
    calcPoints(sound, 1)
  } else {
    sound.pause()
    calcPoints(sound, -1)
  }
  if(enableAutoBG.checked === true) {
    autoBackground()
  }
}

function calcPoints(sound, x) {
  if(sound === ocean || sound === seagulls){
    beach4+=x
  }
  if (sound === wind) {
    autumntrees+=x
    snowfall+=x
    trees3+=x
    rain3+=x
  }
  if (sound === rain1 || sound === storm) {
    rain1BG+=x
    rain3+=x
    window1+=x
  }
  if(sound === night){
    snowfall+=x
    window1+=x
  }
  if (sound === birdschirp) {
    autumntrees+=x
    trees3+=x
  }
  if (sound===highway) {
    rain1+=x
  }
  if (sound===fireplace) {
    castle+=x
    window+=x
  }

  if (sound === pencil1 || sound === typewriter || sound === clock ||
   sound === library ) {
    window1+=x
    castle+=x
  }
  if (sound === typing || sound === mouse ||
    sound === cafe1 ) {
    shop1+=x
  }
  if(sound === page ||sound === paper) {
    window1+=x
    castle+=x
    shop1+=x
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
  for (let i = 0; i < MusicLibrary.length; i++) {
    const sound = MusicLibrary[i];
    sound.volume = 0.5
    sound.loop = true
  }
}
setAll()


function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {

    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}



function toggleMusic (checkID, sound) {
  for (let i = 0; i < MusicLibrary.length; i++) {
    const x = MusicLibrary[i];
    x.pause()
  }
  if(checkID.checked === true) {
    sound.play()
  }
}

function beginPlaylist() {

}


function hideVid2(target) {
  vid2.style.opacity = 0;
  console.log("0 opacity")
  setTimeout(() => {
      vid2.src = "img/live/" + target + ".mp4"
      console.log("switched hidden vid")
    }, 600);
    setTimeout(() => {
      console.log("bring back opacity")
      vid2.style.opacity = 1;
    }, 1000);
    setTimeout(() => {
      vid.src = "img/live/" + target + ".mp4"
      vid.currentTime=1.8
      console.log("set underneath")
    }, 1800);
}


function autoBackground() {
  var num = [autumntrees, beach4, castle,
  rain1BG, rain3, shop1, snowfall, trees3, window1,];
  let max = Math.max.apply(null, num)

  let x =max

  if (x === autumntrees) {
    hideVid2("autumntrees")
  }
  else if (x === beach4) {
    hideVid2("beach4")
  }
  else if (x === castle) {
    hideVid2("castle")
  }
  else if (x === rain1BG) {
    hideVid2("rain1")
  }
  else if (x === rain3) {
    hideVid2("rain1")
  }
  else if (x === snowfall) {
    hideVid2("snowfall")
  }
  else if (x === trees3) {
    hideVid2("trees3")
  }
  else if (x === window1) {
    hideVid2("window1")
  }
  else if (x === shop1) {
    hideVid2("shop1")
  }
    // for (let i = 0; i < num.length; i++) {
    //   const x = num[i];
    //   if(x === max){
    //   }
    // }
}
