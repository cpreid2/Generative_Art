function gaussianRand() {
  var rand = 0;

  for (var i = 0; i < 6; i += 1) {
    rand += Math.random();
  }

  return rand / 6;
}

function randomcircle(x,y,radius,spread, density,colorinner,colorouter){
push()
  var from = color(colorinner)
  var to = color(colorouter)

  translate(x,y)
  
  for (i = 0 ; i < density; i++){
    for (angle = 0; angle < 360; angle++){
      var randomnum = gaussianRand()
      var circlecolor = lerpColor(from, to, randomnum);
      noStroke()
      fill(circlecolor)
      ellipse(0,radius + randomnum *spread,1)
      rotate(angle)
     }
    }
  pop()
}


function setup() {
createCanvas(1000, 1000);
background(0)
  var c1 = color(255, 255, 255)
  var c2 = color(255, 255, 255)
  var c3 = color(255, 255, 255)

for (var i = 0 ; i <20; i++){
var colorchooser = random();
var colors = c1;

if (colorchooser < 0.33){
colors = c1;
}else{
colors = c2
}
var c_radius = 50+400*gaussianRand()
var c_spread = 200*random()
if (c_radius > 350){
c_spread = 450*random()
}
var c_density = 50*random()
if (random()<0.5){
c_density = 300*random()
}

randomcircle(1000/2,1000/2,c_radius,c_spread,c_density,colors,'rgb(255,255,255)')
}
ellipse(500,500,200)
color(0, 0, 0)
fill(0)
ellipse(500,500,50)
}

function draw() {

}