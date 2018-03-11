var cells=[];
var rows=50,cSize,cLen;
function setup() {
  frameRate(1)
  createCanvas(500,500);
  cLen=rows*rows;
  cSize=width/rows;
  
  for(x=0;x<rows;x++){
    for(y=0;y<rows;y++){
      cells[x*rows+y]=new Cell(x,y,x*rows+y);
    }
  }
  cells[0].active=true;
  cells[1].active=true;
  cells[rows].active=true;
}

function draw() {
  for(i=0;i<cLen;i++){
   cells[i].show();
   cells[i].tick();
  }
}

function keyPressed(){
  noLoop();
}