let numbers = [],
  numbersLength = 100,
  stackSize, border = 1,
  index = 0,
  passes = 0,
  start = 0;
let HEIGHT = 400,
  WIDTH = 800,
  MAX_VAL = HEIGHT
let cvs, c, thread

function gen() {
  for (i = 0; i < numbersLength; i++) {
    numbers[i] = i * HEIGHT / numbersLength;
  }
  for (i = 0; i < numbersLength; i++) {
    let temp = numbers[i];
    let temp2 = Math.floor(Math.random() * numbersLength);
    console.log(temp2);

    numbers[i] = numbers[temp2];
    numbers[temp2] = temp;
  }
}

function drawNumbers() {
  for (i = 0; i < numbersLength; i++) drawStack(i, "#fff");

}

function drawStack(i, clr) {
  c.fillStyle = clr;

  c.fillRect(i * stackSize, HEIGHT - numbers[i], stackSize - border, numbers[i]);
}

function init() {
  cvs = document.querySelector("canvas")
  cvs.width = WIDTH
  cvs.height = HEIGHT
  c = cvs.getContext("2d")

  gen()
  stackSize = WIDTH / numbersLength;
  thread = setInterval(tick, 10)
}

function tick() {
  c.fillStyle = "#000"
  c.fillRect(0, 0, WIDTH, HEIGHT)
  drawNumbers();
   drawStack(index, "#f00");
   drawStack(index+1, "#0f0");
  if (numbers[index] > numbers[index + 1]) {
    let temp = numbers[index]
    numbers[index] = numbers[index + 1]
    numbers[index + 1] = temp
  }
  
  index++;
  if (index == numbersLength - 1 - passes) {
    passes++;
    index = start;
  }
}
window.addEventListener("load", init)
