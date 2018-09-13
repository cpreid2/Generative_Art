function circlethingy(leaflength,curvature,numlines){
stroke(255);
  strokeWeight(2)
noFill()
for (i = 0; i < 360; i += numlines){
push()
translate(300,300)
rotate(i / 360 * TWO_PI)
bezier(0, 0, leaflength/4*curvature, (leaflength/4-leaflength/8)*curvature, leaflength/2*curvature, (leaflength/2-leaflength/4)*curvature,leaflength,leaflength);
fill(255)

pop()
}
fill(0)
}
function setup() {

  createCanvas(600, 600);
  background(0);
  noFill()
  

circlethingy(150,1,18)
  
circlethingy(150,2.2,18)
circlethingy(150,3.2,18)


ellipse(300,300,80)
noFill()
  fill(255)
ellipse(300,300,65)

circlethingy(22.5,0,15)


}

function draw() {


}