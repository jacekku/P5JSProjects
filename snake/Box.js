function Box(x,y){
  this.x=x;
  this.y=y;
  this.size=0;
  this.fill=color(random(0,255),random(0,255),random(0,255));
  this.show = function(){
    fill(this.fill);
    rect(this.x,this.y,this.size,this.size);
  }
  this.changePos=function(x,y){
    this.x=x;this.y=y;
  }
  this.newFill=function(){
    this.fill=color(random(0,255),random(0,255),random(0,255));
  }
}