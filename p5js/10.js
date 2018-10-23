function setup() {
	var lengthcanvas = 800
	var widthcanvas = 800
	
	createCanvas(lengthcanvas, widthcanvas);
	
	const array = n => Array.from (new Array(n));

	const arcs01 = n => array(n).map((_,i) => (
		n <= 1 ? 0 : i / (n - 1)
		));
	
	const points = arcs01(100).map( t => {
	
	return [(t)*lengthcanvas, Math.random(t * 10)];
	});
	
	background(0)
	stroke(255)
	noFill()
	strokeWeight(0.25)
	var noisycurve = points
	for (j = 0; j < lengthcanvas; j = j + 15){
	
	push() 
	beginShape();
	
	curveVertex(j, 0); // the first control point
	
	for (var y = 0; y < noisycurve.length; y++){
	var noisey = noise(y/25 + j)
	
	curveVertex(map(noisey, 0, 1, -noisycurve[y][0]/3, noisycurve[y][0]/3) + j, noisycurve[y][0]); // is also the start point of curve
	
	}
	curveVertex(j, lengthcanvas); // the first control point
	endShape();
	
	
}
}

function draw() {

}