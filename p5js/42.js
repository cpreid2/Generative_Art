var circles;

class Circle {
  constructor(x,y,r,rotation) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.rot = rotation;
  }

  display() {
    this.randomShapePicker = Math.random()
    if (this.randomShapePicker > 0.8){
      ellipse(this.x,this.y,this.r)
    }else{
    push()
    translate(this.x,this.y)
    rotate(this.rot)
    this.L_2 = (this.r * Math.sqrt(3)/2)
    triangle(0, 0-this.r,
      0 + this.L_2, 0+(Math.sqrt(Math.pow(this.r,2) - Math.pow(this.L_2,2))),
      0 - this.L_2, 0+(Math.sqrt(Math.pow(this.r,2) - Math.pow(this.L_2,2))))
    pop()
  }
}
}


function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	var strip_length = 100

  greens = randomColor({
   count: 10,
   hue: 'red'
  });

  blues = randomColor({
  count: 10,
  hue: 'blue'
  });

  reds = randomColor({
  count: 10,
  hue: 'red'
  });

	createCanvas(lengthcanvas, widthcanvas);
	background(30)
	fill(255)
	noStroke()
	circles = []
	var x1 = 75
	var x2 = 950
	var y1 = 100
	var y2 = 950

	for (var numcircles = 0; numcircles < 10000; numcircles ++){

  pickTwo = Math.random();
  var stroke1 = 0
    if (pickTwo <0.3){
      stroke1 = reds[floor(Math.random()*10)]
    }else if (pickTwo > 0.3 || pickTwo < 0.6){
      stroke1 = blues[floor(Math.random()*10)]
    }else{
      stroke1 = greens[floor(Math.random()*10)]
    }
  fill(stroke1)

	var circle_r = 15
  var center_y = map(Math.random(),0,1,y1-circle_r,y2-circle_r)

  offset_1 = map(center_y,y1,y2,0,650)

	var center_x = map(Math.random(),0,1,x1+(offset_1)-circle_r,x2-(offset_1)-circle_r)
  //fill(255,255,255,floor(map(center_y,0,1000,255,150)))
	circle = new Circle(center_x, center_y, circle_r/(center_y/120),Math.random()*50);

    // test if circle doesn't overlap
    var valid = true

    for (var i = 0; i < circles.length; i++){

       var circ = circles[i];
       var d = dist(center_x, center_y, circ.x, circ.y);

       if (d < 2 * circ.r) {
       valid = false
       break;
       }
    }

    if (valid){
      circles.push(circle);
      circle.display()
    }

	}

save('myImage.jpg');
}

function draw() {

}
