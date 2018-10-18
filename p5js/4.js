function arcSpiral(numArcs, rotations, startAngle, size){

for (var angle = 0; angle < 360 * rotations ; angle += 360 * rotations /numArcs){
  push()
  noStroke()
  fill(floor(random()*255),27,floor(random()*255),50)
  scale(1-(angle/360) *0.8)
  arc(0,0, size, size, (startAngle + angle)/360*TWO_PI*rotations, (360/numArcs + angle + startAngle)/360*TWO_PI * rotations);
	pop()
}
}

function setup() {
  background(50)
  createCanvas(1000, 1000);
  translate(500,500)
  
  for (i = 0; i < 360; i += 90){
  arcSpiral(10,3,-i,500-i,500-i);
  }

}

function draw() {

}