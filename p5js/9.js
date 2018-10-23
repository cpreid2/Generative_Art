var t;

function circle_drop(center_x, center_y, spacing, start, radius){
translate(center_x, center_y);

for (var j = start; j < radius; j = j + spacing){
beginShape();

  for (var i = 0; i < 400; i++) {
    var ang = map(i, 0, 200, 0, TWO_PI*6);
    strokeWeight(0.8 - j/radius)
    var rad = j + map(Math.random(), 0, 1, -1, 1)*j/spacing;
    var x = rad * cos(ang);
    var y = rad * sin(ang);
    curveVertex(x, y);

  }
  endShape(CLOSE);
}

}

function setup() {
  var canvas_size = 2000
  var step_size = 20
  var num_circles = 10
  var circle_spacing = canvas_size / num_circles
  createCanvas(canvas_size, canvas_size);
  background(0);
  stroke(255);
  strokeWeight(0.5)
  noFill();
  t = 0;

for (var z = 0; z < canvas_size - circle_spacing; z = z + circle_spacing){
for (var y = 0; y < canvas_size - circle_spacing; y = y + circle_spacing){
push()
stroke(Math.floor(map(Math.random(), 0, 1, 200, 255)),30,60);
circle_drop(circle_spacing+z, circle_spacing + y, map(Math.random(), 0, 1, 5, 15), y/circle_spacing, circle_spacing/2 * map(Math.random(), 0, 1, 0.5, 1))
pop()
}

}

save('TEST.jpg')
}

function draw() {

}

