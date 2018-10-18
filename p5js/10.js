function setup() {
	var lengthcanvas = 1600
	var widthcanvas = 900
	var padding = 75
	var h_density = 60
	var max_circlestroke = 2
	var circle_variance = 1.5
	var circles_per_line = 16
	createCanvas(widthcanvas, lengthcanvas);
	background(25);
	for ( i = 0;i < circles_per_line; i++){
		for (j = 0; j < h_density-4; j++){
		push()
		translate(padding,padding);
		stroke(50)
		strokeWeight(max_circlestroke - circle_variance/h_density * (j));
		fill(220+j*2)
		rect(Math.floor((widthcanvas-(2 * padding)) * Math.random())-12.5, j*lengthcanvas/h_density-padding/2*Math.random(), (h_density-2-(j))/1.8, (h_density-5-(j))/1.8);
		fill(170+j*4)
		rect(Math.floor((widthcanvas-(2 * padding)) * Math.random())-12.5, j*lengthcanvas/h_density-padding/2*Math.random(), (h_density-2-(j))/1.5, (h_density-5-(j))/1.5);
		fill(170+j*4)
		rect(Math.floor((widthcanvas-(2 * padding)) * Math.random())-12.5, j*lengthcanvas/h_density-padding/2*Math.random(), (h_density-2-(j))/2, (h_density-5-(j))/2);
		fill(130+j*5)
		rect(Math.floor((widthcanvas-(2 * padding)) * Math.random())-12.5, j*lengthcanvas/h_density-padding/2*Math.random(), (h_density-2-(j))/2, (h_density-5-(j))/2);


			//ellipse(Math.floor((widthcanvas-(2 * padding)) * Math.random()),j*lengthcanvas/h_density,100-(j*2));
		pop()
	}
	}
}

function draw() {

}