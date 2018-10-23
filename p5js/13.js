var circles;


class Circle {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
 
  display() {
    ellipse(this.x,this.y,this.r)
  }
  
}


function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	var strip_length = 100
	
	
	createCanvas(lengthcanvas, widthcanvas);
	background(100)
	fill(0)
	
	for (var j = 50; j < lengthcanvas-50; j = j + strip_length){
	fill(255)
	strokeWeight(1.7)
	circles = []
	var x1 = 50
	var x2 = 950
	var y1 = j
	var y2 = strip_length + j -10
	
	for (var numcircles = 0; numcircles < 500*j/25; numcircles ++){
    
	var circle_r = 1.1 + j / 200
	var center_x = map(Math.random(),0,1,x1-circle_r,x2-circle_r)
	var center_y = map(Math.random(),0,1,y1-circle_r,y2-circle_r)
	
	circle = new Circle(center_x, center_y, circle_r);
	
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
	} 
save('myImage.jpg');
}

function draw() {

}