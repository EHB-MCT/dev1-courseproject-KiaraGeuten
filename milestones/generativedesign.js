import context from "../scripts/context.js";

let width = context.canvas.width;
let height = context.canvas.height;
let size = 30;

//draw background
// kleuren
let colors = ["magenta", "blue", "cyan", "green", "yellow", "orange", "red"];

// Random start maken
let startIndex = Math.floor(Math.random() * colors.length);
// aantal diagonalen
for (let i = 0; i < 100; i++) {
  //kiest begin en zorgt vr herhaling
  let colorIndex = (startIndex + i) % colors.length;
  context.fillStyle = colors[colorIndex];
  // hoeveel in 1 diagonaal
  for (let j = 0; j < 100; j++) {
    context.fillRect(2700 - j * size, j * size - i * size, size, size);
  }
}

//letter posities tov midden
let heightLetters = 240;
let middleX = width / 2;
// offset wisselen vr verplaatsing
let offsetK = middleX - 253.5;
let offsetG = middleX + 46.5;
let offsetE = middleX - 103.5;
let offsetD = middleX - 493.5;
let offsetV = middleX + 256.5;

//teken kg
function KG() {
  context.fillStyle = "white";
  // vert lijnen; k,g
  for (let x = 0; x < 15; x++) {
    context.fillRect(offsetK, heightLetters + x * size, size, size);
    context.fillRect(offsetG, heightLetters + x * size, size, size);
  }
  // lijn omhoog + lijn omlaag K
  for (let x = 0; x < 8; x++) {
    context.fillRect(offsetK + x * size, 450 + x * size, size, size);
    context.fillRect(offsetK + x * size, 450 - x * size, size, size);
  }

  // hroizontale lijnen G + verticale halve van g
  for (let x = 0; x < 7; x++) {
    context.fillRect(offsetG + x * size, heightLetters, size, size);
    context.fillRect(offsetG + x * size, 660, size, size);
    context.fillRect(middleX + 226.5, 660 - x * size, size, size);
  }
  // horizon klein
  context.fillRect(middleX + 196.5, 480, size, size);
}
// teken dev
function DEV() {
  context.fillStyle = "white";
  // verticalen
  for (let x = 0; x < 15; x++) {
    context.fillRect(offsetE, heightLetters + x * size, size, size);
    context.fillRect(offsetD, heightLetters + x * size, size, size);
  }
  // korte ver D
  for (let x = 0; x < 13; x++) {
    context.fillRect(middleX - 253.5, 270 + x * size, size, size);
  }
  //vert V
  for (let x = 0; x < 11; x++) {
    context.fillRect(offsetV, heightLetters + x * size, size, size);
    context.fillRect(offsetV + 240, heightLetters + x * size, size, size);
  }
  // horizontalen
  for (let x = 0; x < 8; x++) {
    //E
    context.fillRect(offsetE + x * size, heightLetters, size, size);
    context.fillRect(offsetE + x * size, 450, size, size);
    context.fillRect(offsetE + x * size, 660, size, size);
    //D
    context.fillRect(offsetD + x * size, heightLetters, size, size);
    context.fillRect(offsetD + x * size, 660, size, size);
  }

  // diag
  for (let x = 0; x < 4; x++) {
    context.fillRect(offsetV + 30 + x * size, 570 + x * size, size, size);
    context.fillRect(offsetV + 240 - x * size, 540 + x * size, size, size);
  }
}
// switch between dev en kg
if (localStorage.getItem("refresh") === "KG") {
  KG();
  localStorage.setItem("refresh", "DEV");
} else {
  DEV();
  localStorage.setItem("refresh", "KG");
}

//parameters meegeven: func kg(x,y,size) -> kg(10,20)
