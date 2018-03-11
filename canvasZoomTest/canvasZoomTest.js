function setup() {
  createCanvas(500, 500)
    pixelDensity(1)
    noStroke()
    fill(0)
}
factor=1
  function draw() {
  background(255)
    if (mouseIsPressed) {
    translate(-255, -255)
    scale(0.5,0.5)
    
    //translate(-width/2-mouseX, -height/2-mouseY)
  }
  rect(250, 250, 10, 10)
}

function mouseWheel(event) {
  print(event.delta/1000)
    factor+=-event.delta/1000
}