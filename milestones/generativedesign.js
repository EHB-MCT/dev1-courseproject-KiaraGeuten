import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

// for (let i = 0; i < 100; i++) {
//   context.fillStyle = Utils.hsl(Math.random() * 36 + i * 36, 100, 50);
//   for (let j = 0; j < 100; j++) {
//     context.fillRect(2700 - j * 30, j * 30 - i * 30, 30, 30);
//   }
// }

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
