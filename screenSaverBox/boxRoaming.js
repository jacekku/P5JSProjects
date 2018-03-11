var p;

function setup() {
  createCanvas(400,400);
  p=new Particle();
  print(p);
}

function draw() {
 // background(51);
  p.physics();
  p.show();
}