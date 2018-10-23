function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	createCanvas(lengthcanvas, widthcanvas);
	const array = n => Array.from (new Array(n));

	const arcs01 = n => array(n).map((_,i) => (
		n <= 1 ? 0 : i / (n - 1)
		));
	
	
	
	background(0)
	stroke(255,15)
	noFill()
	strokeWeight(2)
	for (j = 0; j < lengthcanvas-20; j = j + 20){
	const points = arcs01(100).map( t => {
	
	return [(t)*lengthcanvas, Math.random(t * 10)];
	});
	var noisycurve = points
	push() 
	
	
	beginShape();
  	curveVertex(noisycurve[0][0], noisycurve[0][1] * j/40 + j+10); // the first control point
	for (i = 0; i < noisycurve.length; i++){
	  
  	curveVertex(noisycurve[i][0], noisycurve[i][1] * j/40 + j+10); // is also the start point of curve
	
	//ellipse(noisycurve[i][0] + 500,,3)
	}
	curveVertex(noisycurve[0][0], noisycurve[0][1] * j/40 + j+10); // is also the last control point
	endShape();
	}
	pop()


}

function draw() {

}