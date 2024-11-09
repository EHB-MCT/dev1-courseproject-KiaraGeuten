import context from "../scripts/context.js";
import * as Utils from "../scripts/utils.js";

// context.fillRect(0, 0, 50, 50);
// context.fillStyle = "red";
// context.fillRect(50, 0, 50, 50);
// context.fillRect(0, 50, 50, 50);
// context.fillStyle = "yellow";
// context.fillRect(100, 0, 50, 50);
// context.fillRect(0, 100, 50, 50);
// context.fillRect(50, 50, 50, 50);

for (let i = 0; i < 50; i++) {
  context.fillStyle = Utils.hsl(Math.random() * 360, 100, 50);
  for (let j = 0; j < 58; j++) {
    context.fillRect(1707 - j * 30, j * 25 + i * 30, 25, 25);
    context.fillRect(1707 - j * 30, j * 25 - i * 30, 25, 25);
  }
}
