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

// switch between dev en kg
if (localStorage.getItem("refresh") === "KG") {
  KG(150, 150);
  localStorage.setItem("refresh", "DEV");
} else {
  DEV(300, 200);
  localStorage.setItem("refresh", "KG");
}

//teken kg
function KG(Kposx, y) {
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
function DEV(Dposx, y) {
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
    context.fillRect(Vpos + 240, y + x * size, size, size);
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
