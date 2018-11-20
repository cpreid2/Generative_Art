var canvas_width = 800
var canvas_height = 800

var shape_dim = 10
var num_iterations = 40

function setup() {
createCanvas(canvas_width, canvas_height);
background(255)

translate(400,400)
strokeWeight(0.1)
for (r = 50; r < 600; r = r + 25){
fill(200)
	beginShape()
	for (i = 0; i < 360; i ++){
		x = r * Math.cos(i)
		y = r * Math.sin(i)
		curveVertex(x,y)
	}
	endShape(CLOSE)
}
}
function draw() {

}