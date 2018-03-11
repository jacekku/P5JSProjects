function Particle(){
this.position=createVector(int(random(width)),int(random(height)));
this.Xdir=1;
this.Ydir=1;
this.speed=10;

this.physics=function(){
  if(this.Xdir && this.Ydir){
    this.position.add(this.speed,this.speed);
  }
  else if(!this.Xdir && this.Ydir){
    this.position.add(-this.speed,this.speed);
  }
  else if(this.Xdir && !this.Ydir){
    this.position.add(this.speed,-this.speed);
  }
  else if(!this.Xdir && !this.Ydir){
    this.position.add(-this.speed,-this.speed);
  }
  if(this.position.x+10>width)
    this.Xdir=0;
  else if(this.position.x<0)
    this.Xdir=1;
  else if(this.position.y+10>height)
    this.Ydir=0;
  else if(this.position.y<0)
    this.Ydir=1;
}
this.show=function(){
  rect(this.position.x,this.position.y,10,10);
}
}