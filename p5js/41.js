var canvasWidth = 800
var canvasHeight = 800
var colorspacing = 25
var innerRandbow = 200
var circlesize = 54
var t = 0
var rainbowsize = 0
var grow = true

function setup() {

  createCanvas(canvasWidth, canvasHeight);
  background(25);
  noStroke()
  rectMode(CENTER)

}

function draw() {

  background(25);
  noStroke()

  translate(width/2, height/1.4);
	for (var i = 0; i < floor(rainbowsize); i++) {
		push();
    rotation = TWO_PI/2 + TWO_PI * i / 180
		rotate(rotation);
    for (var j = 0; j < 5; j++){
      fill(118, 0, 137,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow,innerRandbow+colorspacing),0,circlesize*rainbowsize/100*noise(i,j,t))
      fill(0, 68, 255,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow+colorspacing,innerRandbow+colorspacing*2),0,circlesize*rainbowsize/100*noise(i,j,t))
      fill(0, 129, 31,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow+colorspacing*2,innerRandbow+colorspacing*3),0,circlesize*rainbowsize/100*noise(i,j,t))
      fill(255, 239, 0,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow+colorspacing*3,innerRandbow+colorspacing*4),0,circlesize*rainbowsize/100*noise(i,j,t))
      fill(255, 140, 0,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow+colorspacing*4,innerRandbow+colorspacing*5),0,circlesize*rainbowsize/100*noise(i,j,t))
      fill(231, 0, 0,rainbowsize)
      ellipse(map(noise(i,j),0,1,innerRandbow+colorspacing*5,innerRandbow+colorspacing*6),0,circlesize*rainbowsize/100*noise(i,j,t))
    }
		pop();
	}
  t = t+0.1
  if (grow){
    rainbowsize = rainbowsize +0.3
  }else{
    rainbowsize = rainbowsize -0.3
  }

  if (rainbowsize >90){
        grow = false;
  }else if (rainbowsize < 0){
    grow = true;
  }



}
