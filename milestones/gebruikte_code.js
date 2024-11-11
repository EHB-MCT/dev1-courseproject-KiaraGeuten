// https://cs50.ai/chat geraadpleegd op 8/11

let colors = ["", "", "", "", "", "", ""];
let startIndex = Math.floor(Math.random() * colors.length);
let colorIndex = (startIndex + i) % colors.length;
context.fillStyle = colors[colorIndex];

if (localStorage.getItem("") === "function1") {
  ("function");
  localStorage.setItem("", "function2");
} else {
  ("function2");
  localStorage.setItem("", "fucnction1");
}
