"use strict";
signature();

function signature() {
  let canvas = document.querySelector("canvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  let context = canvas.getContext("2d");

  context.fillStyle = "black";
  context.fillRect(0, 0, 300, 300);
 
  context.fillStyle = "#C17AD0";
  context.fillRect(75, 25, 50, 50);
  context.fillRect(25, 75, 50, 200);
  context.fillRect(75, 125, 50, 50);
  context.fillRect(125, 175, 50, 50);
  context.fillRect(175, 125, 50, 50);
  context.fillRect(175, 25, 50, 50);
  context.fillRect(225, 75, 50, 200);
  context.fill();
}

