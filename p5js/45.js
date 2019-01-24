var lengthcanvas = 800
var widthcanvas = 800
var num_curves = 7000
var num_datapoints = 44
var stroke1 = 0
function setup() {

	createCanvas(lengthcanvas, widthcanvas);
  greens = randomColor({
   count: 10,
   hue: 'green',
   format: 'rgba',
   alpha:0.5
  });

  reds = randomColor({
   count: 10,
   hue: 'red',
   format: 'rgba',
   alpha:0.5
  });

  blues = randomColor({
   count: 10,
   hue: 'blue',
   format: 'rgba',
   alpha:0.5
  });

  greens1 = randomColor({
   count: 10,
   hue: 'green',
   format: 'rgba',
   alpha:0.9
  });

  reds1 = randomColor({
   count: 10,
   hue: 'red',
   format: 'rgba',
   alpha:0.9
  });

  blues1 = randomColor({
   count: 10,
   hue: 'blue',
   format: 'rgba',
   alpha:0.9
  });

	background(30)
	stroke(255)
	//noStroke()
  strokeWeight(0.8)
  noFill()
	for (j = 0; j < num_curves; j = j + 1){
    pickTwo = Math.random();
    if (pickTwo <0.3){
      stroke1 = greens[floor(Math.random()*10)]
    }else if (pickTwo > 0.3 || pickTwo < 0.6){
      stroke1 = reds[floor(Math.random()*10)]
    }else{
      stroke1 = blues[floor(Math.random()*10)]
    }
    stroke(stroke1)
	push()
  translate(400,400)
  beginShape()
  curveVertex(0,0)
  curveVertex(0,0)
  for (pts = 0; pts < num_datapoints; pts++){
    vertex(pts*20,50*noise(j,pts/5)*pts/num_datapoints*10)
  }
  rotate(j/(num_curves)*TWO_PI*2)
  endShape()
  pop()

}


for (j = 0; j < num_curves/2; j = j + 1){
  strokeWeight(1.5)
  push()
  translate(400,400)
  pickTwo = Math.random();
  if (pickTwo <0.3){
    stroke1 = greens1[floor(Math.random()*10)]
  }else if (pickTwo > 0.3 || pickTwo < 0.6){
    stroke1 = reds1[floor(Math.random()*10)]
  }else{
    stroke1 = blues1[floor(Math.random()*10)]
  }
  stroke(stroke1)
  beginShape()
  curveVertex(0,0)
  curveVertex(0,0)
  curveVertex(200,0)
  curveVertex(200,0)
  rotate(j/(num_curves)*TWO_PI*2)
  endShape()
  pop()
}
fill(40)
noStroke()
ellipse(400,400,230)
fill(240)
noStroke()
ellipse(400,400,50)
save("HEYYYY.jpg")
}

function draw() {

}
