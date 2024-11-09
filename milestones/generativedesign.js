import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

//background

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
    context.fillRect(2700 - j * 30, j * 30 - i * 30, 30, 30);
  }
}

// KG();
function KG() {
  context.fillStyle = "white";
  // vert lijnen; k,g
  for (let x = 0; x < 15; x++) {
    context.fillRect(600, 240 + x * 30, 30, 30);
    context.fillRect(990, 240 + x * 30, 30, 30);
  }
  // lijn omhoog + lijn omlaag K
  for (let x = 0; x < 8; x++) {
    context.fillRect(600 + x * 30, 450 + x * 30, 30, 30);
    context.fillRect(600 + x * 30, 450 - x * 30, 30, 30);
  }

  // hroizontale lijnen G + verticale halve van g
  for (let x = 0; x < 7; x++) {
    context.fillRect(990 + x * 30, 240, 30, 30);
    context.fillRect(990 + x * 30, 660, 30, 30);
    context.fillRect(1170, 660 - x * 30, 30, 30);
  }
  // horizon klein
  context.fillRect(1140, 480, 30, 30);
  context.fillRect(1110, 480, 30, 30);
}
