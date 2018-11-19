var lengthcanvas = 500
var widthcanvas = 500

function lineDrop(x,y,width,height,spacing,offset){


for (var xoff = 0; xoff < width; xoff+=spacing){
noisey_xoff = width * noise(xoff)
line(x+noisey_xoff, y, x+noisey_xoff, y + 1.25*height * noise(xoff/100+offset));

}
 

}
	
function setup() {

	createCanvas(lengthcanvas, widthcanvas);
	background(255)
	for (i = 1; i < 10; i++){ 
	push()
	strokeWeight(1-i/5)
	stroke(0,Math.floor(Math.random()*255),215)
	lineDrop(0,0,widthcanvas,lengthcanvas/i,i*5,i)
	pop()
	}
}
function draw() {

}