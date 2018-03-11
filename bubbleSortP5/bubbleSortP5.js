var numbers=[], numbersLength=20, stackSize, border=1, index=0, passes=0, start=0;
var MAX_VAL=400;
function setup() {
  createCanvas(400, 400);
  frameRate(60);
  numbersLength;
  stackSize=width/numbersLength;
  background(0);
  noStroke();
  //stroke(255);
  gen();
}

function draw() {
  //print(frameRate());
  background(0);
  drawNumbers();
  drawStack(index,color(255,0,0));
  if (numbers[index]>numbers[index+1]) {
    
    //numbers[index] = numbers[index] + numbers[index+1];
    //numbers[index+1] = numbers[index] - numbers[index+1];
    //numbers[index] = numbers[index] - numbers[index+1];
    var temp = numbers[index];
    numbers[index] = numbers[index+1]
    numbers[index+1] = temp
  }
  drawStack(index, color(255, 0, 0));
  index++;
  if (index==numbersLength-1-passes) {
    passes++;
    index=start;
  }
}
function gen() {
  for (i=0; i<numbersLength; i++) {
    numbers[i]=i*height/numbersLength;
  }
  for (i=0; i<numbersLength; i++) {
    var temp = numbers[i];
    var temp2 = floor(random(numbersLength));
    //print(temp, temp2)
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