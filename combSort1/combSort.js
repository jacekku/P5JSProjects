<<<<<<< HEAD
var numbers=[], numbersLength=400, stackSize, border=1, index=0, passes=0, start=0;
var MAX_VAL=400, combSpacing, sorted=false, shrink=1.3;
var comparisons=0, changes=0;
function setup() {
  createCanvas(1600, 400);
  frameRate(60);
  combSpacing=numbersLength-1;
  stackSize=width/numbersLength;
  background(0);
  noStroke();
  gen();
}
function draw() {

  background(0);
  fill(255);
  text("comparisons:"+comparisons+" changes:"+changes, 0, 10);
  noStroke();
  drawNumbers();
  drawStack(index, color(255, 0, 0));
  drawStack(index+combSpacing, color(0, 255, 0));

  if (numbers[index]>numbers[index+combSpacing]) {
    changes++;
    comparisons++;
    var temp = numbers[index];
    numbers[index] = numbers[index+combSpacing];
    numbers[index+combSpacing] = temp;
    sorted=false;
  } else {
    comparisons++;
  }
  drawStack(index, color(255, 0, 0));
  index++;
  if (index+combSpacing==numbersLength) {
    if (sorted && combSpacing<2) {
      noLoop();
    }
    passes++;
    combSpacing=floor(combSpacing/shrink);
    if (combSpacing<1) {
      combSpacing=1;
    }
    index=start;
      sorted=true;
  }
}



function regen() {
  loop();
  combSpacing=floor(numbersLength/2)
    stackSize=width/numbersLength;
  gen();
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
=======
var numbers=[], numbersLength=400, stackSize, border=1, index=0, passes=0, start=0;
var MAX_VAL=400, combSpacing, sorted=false, shrink=1.3;
var comparisons=0, changes=0;
function setup() {
  createCanvas(1600, 400);
  frameRate(60);
  combSpacing=numbersLength-1;
  stackSize=width/numbersLength;
  background(0);
  noStroke();
  gen();
}
function draw() {

  background(0);
  fill(255);
  text("comparisons:"+comparisons+" changes:"+changes, 0, 10);
  noStroke();
  drawNumbers();
  drawStack(index, color(255, 0, 0));
  drawStack(index+combSpacing, color(0, 255, 0));

  if (numbers[index]>numbers[index+combSpacing]) {
    changes++;
    comparisons++;
    var temp = numbers[index];
    numbers[index] = numbers[index+combSpacing];
    numbers[index+combSpacing] = temp;
    sorted=false;
  } else {
    comparisons++;
  }
  drawStack(index, color(255, 0, 0));
  index++;
  if (index+combSpacing==numbersLength) {
    if (sorted && combSpacing<2) {
      noLoop();
    }
    passes++;
    combSpacing=floor(combSpacing/shrink);
    if (combSpacing<1) {
      combSpacing=1;
    }
    index=start;
      sorted=true;
  }
}



function regen() {
  loop();
  combSpacing=floor(numbersLength/2)
    stackSize=width/numbersLength;
  gen();
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
>>>>>>> 0acdedb1d523a6c787293f9edf2b16172cce82fd
}