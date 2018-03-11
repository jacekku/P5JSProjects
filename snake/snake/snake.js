var boxes=[]
var sizeDiff=1;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(70);
  for(i=0;i<200;i++){
    boxes.push(new Box(mouseX,mouseY));
  }
  for(i=1;i<boxes.length;i++){
    boxes[i].size=boxes[i-1].size+sizeDiff;
  }
}

function draw() {
  background(70);
  noStroke();
  boxes[0].x=mouseX;
  boxes[0].y=mouseY;
  for(i=boxes.length-1;i>0;i--){
    boxes[i].changePos(boxes[i-1].x+sizeDiff,boxes[i-1].y+sizeDiff);
    boxes[i].show();
    boxes[i].newFill();
  }
  
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}