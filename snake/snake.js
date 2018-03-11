var boxes=[]
var sizeDiff=2;
function setup() {
  createCanvas(windowWidth,windowHeight);
  background(70);
  for(i=0;i<100;i++){
    boxes.push(new Box(0,0));
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
    boxes[i].changePos(boxes[i-1].x+sizeDiff/2,boxes[i-1].y-sizeDiff/2);
    boxes[i].show();
  }
  colorsForward();
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function mouseWheel(event) {
  if(event.delta<0){
    colorsForward();
  }else{
    colorsBackward();
  }
}
function colorsForward(){
  boxes[boxes.length-1].fill=boxes[i].fill;
    for(i=0;i<boxes.length-1;i++){
      boxes[i].fill=boxes[i+1].fill;
    }
}
function colorsBackward(){
  boxes[i].fill=boxes[boxes.length-1].fill;
  for(i=boxes.length-1;i>0;i--){
      boxes[i].fill=boxes[i-1].fill;
    }
}