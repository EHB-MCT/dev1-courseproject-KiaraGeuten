import context from "../scripts/context.js";
let width = context.canvas.width;
let height = context.canvas.height;

//draw background
let size = width / 57;
let colors = ["red", "orange", "yellow", "green", "cyan", "blue", "magenta"];
// array to store square object
let background = [];
//random number with random begin color
let startIndex = Math.floor(Math.random() * colors.length);

//loop that creates an object for each square
for (let i = 0; i < width / size; i++) {
  let square = {
    x: i * size,
    y: 0,
    colors: startIndex + i,
  };
  background.push(square);
}
//draws squares
drawSquares();
function drawSquares() {
  //draws squares = length background array (= screenwidth)
  for (let i = 0; i < background.length; i++) {
    // draws squares = screenheight
    for (let j = 0; j < height / size; j++) {
      context.fillStyle = colors[(background[i].colors + j) % colors.length];
      context.fillRect(background[i].x, background[i].y + j * size, size, size);
    }
  }
}
// switch between dev en kg
if (localStorage.getItem("refresh") === "KG") {
  KG(size * 20, size * 7, 30);
  localStorage.setItem("refresh", "DEV");
} else {
  DEV(size * 10, size * 7, 30);
  localStorage.setItem("refresh", "KG");
}
//teken kg
function KG(Kposx, y, size) {
  let Gposx = Kposx + size * 10;
  context.fillStyle = "white";
  // vert lijnen; k,g
  for (let i = 0; i < 15; i++) {
    context.fillRect(Kposx, y + i * size, size, size);
    context.fillRect(Gposx, y + i * size, size, size);
  }
  // lijn omhoog + lijn omlaag K
  for (let i = 0; i < 8; i++) {
    context.fillRect(Kposx + i * size, y + 7 * size + i * size, size, size);
    context.fillRect(Kposx + i * size, y + 7 * size - i * size, size, size);
  }

  // hroizontale lijnen G + verticale halve van g
  for (let i = 0; i < 7; i++) {
    context.fillRect(Gposx + i * size, y, size, size);
    context.fillRect(Gposx + i * size, y + size * 14, size, size);
    context.fillRect(Gposx + size * 6, y + size * 14 - i * size, size, size);
  }

  // horizon klein
  context.fillRect(Gposx + size * 5, y + size * 8, size, size);
}
// teken dev
function DEV(Dposx, y, size) {
  let Epos = Dposx + size * 14;
  let Vpos = Epos + size * 13;
  context.fillStyle = "white";
  // verticalen
  for (let i = 0; i < 15; i++) {
    context.fillRect(Epos, y + i * size, size, size);
    context.fillRect(Dposx, y + i * size, size, size);
  }
  // korte ver D
  for (let i = 0; i < 13; i++) {
    context.fillRect(Dposx + 8 * size, y + size + i * size, size, size);
  }
  //vert V
  for (let x = 0; x < 11; x++) {
    context.fillRect(Vpos, y + x * size, size, size);
    context.fillRect(Vpos + size * 8, y + x * size, size, size);
  }
  // horizontalen
  for (let i = 0; i < 8; i++) {
    //E
    context.fillRect(Epos + i * size, y, size, size);
    context.fillRect(Epos + i * size, y + size * 7, size, size);
    context.fillRect(Epos + i * size, y + size * 14, size, size);
    //D
    context.fillRect(Dposx + i * size, y, size, size);
    context.fillRect(Dposx + i * size, y + size * 14, size, size);
  }

  // diag
  for (let i = 0; i < 5; i++) {
    context.fillRect(Vpos + i * size, y + size * 10 + i * size, size, size);
    context.fillRect(
      Vpos + 8 * size - i * size,
      y + size * 10 + i * size,
      size,
      size
    );
  }
}
