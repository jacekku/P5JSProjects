var numbers=[], numbersLength=200, stackSize, border=1, index=0, passes=0, start=0;
var MAX_VAL=400, direction=1, swapped=false;
function setup() {
  createCanvas(800, 800,P2D);
  stackSize=ceil(width/numbersLength);
  background(0);
  noStroke();
  smooth(0)
  gen();
}

function draw() {
  background(0);
  drawNumbers();
  drawStack(index, color(255, 0, 0));

  if (numbers[index]>numbers[index+1] && direction==1) {
    var temp = numbers[index];
    numbers[index] = numbers[index+1]
      numbers[index+1] = temp
      swapped=true;
  }
  if (numbers[index]<numbers[index-1]&& direction==-1) {
    var temp = numbers[index];
    numbers[index] = numbers[index-1]
      numbers[index-1] = temp
      swapped=true;
  }

  drawStack(index, color(255, 0, 0));
  index+=direction;
  if (index==numbersLength-1-passes&&direction==1||index==start && direction==-1) {
    if (direction==1)passes++;
    if (direction==-1)start++;
    if (!swapped) {
      noLoop();
      drawNumbers();
    }
    direction*=-1;
    swapped=false;
  }
}

function gen() {
  for (i=0; i<numbersLength; i++) {
    numbers[i]=i*height/numbersLength;
  }
  for (i=0; i<numbersLength; i++) {
    var temp = numbers[i];
    var temp2 = floor(random(numbersLength));
      numbers[i] = numbers[temp2];
    numbers[temp2] = temp;
  }
}
function drawNumbers() {
  for (i=0; i<numbersLength; i++)
    drawStack(i, 255);
}
function drawStack(i, clr) {
  fill(clr);
  rect(i*stackSize, height-numbers[i], stackSize-border, numbers[i]);
}

function drawPoint(i, clr) {
  fill(clr);
  point(i*stackSize, height-numbers[i]);
}