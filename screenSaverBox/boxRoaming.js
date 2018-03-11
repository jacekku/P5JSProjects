var p;

function setup() {
  createCanvas(400,400);
  p=new Particle();
}

function draw() {
 // background(51);
  p.physics();
  p.show();
}