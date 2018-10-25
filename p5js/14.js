var Point = function (x, y) {
  this.x = x;
  this.y = y;
};

Point.prototype.distance = function (other) {
  return new Point(
    this.x - other.x,
    this.y - other.y
  );
};

Point.prototype.halfway = function (other) {
  var distance = this.distance(other);
  return new Point(
    this.x - (distance.x /2 ),
    this.y - (distance.y /2 )
  );
};

Point.prototype.randomdist = function (other) {
  var distance = this.distance(other);
  var randomvar = map(Math.random(),0,1,0.3,0.7)
  return new Point(
    this.x - (distance.x * randomvar),
    this.y - (distance.y * randomvar)
  );
};


function DrawSubTriangles(Points){
if (Math.abs(Points[0].distance(Points[1]).x) <5){
console.log(Points[0].distance(Points[1]))
return
}else{
point4 = Points[0].randomdist(Points[1])
point5 = Points[1].randomdist(Points[2])
point6 = Points[0].randomdist(Points[2])

triangle(Points[1].x, Points[1].y, point4.x, point4.y, point5.x, point5.y)
triangle(Points[0].x, Points[0].y, point4.x, point4.y, point6.x, point6.y)
triangle(Points[2].x, Points[2].y, point5.x, point5.y, point6.x, point6.y)

return DrawSubTriangles([point4, point5, point6])
}
}
var points = []

function splitTriangle(Points,packing){

	
	
	New_Points = []
	
	for (i = 0; i < Points.length; i++){
		newpoint = Points[i][0].randomdist(Points[i][1])
		
		beginShape(TRIANGLES)
		noStroke()
		//fill(255-(i/1.2 / Points.length)*255, 0, 128);
		fill(Math.floor(map(Math.random(),0,1,0.6,0.9)*255),180,180)
		vertex(Points[i][1].x,Points[i][1].y)
		vertex(Points[i][2].x,Points[i][2].y)
		vertex(newpoint.x,newpoint.y)
		endShape(CLOSE)
		New_Points.push([Points[i][1],Points[i][2],newpoint],[Points[i][0],Points[i][2],newpoint])
		}

	if (Points.length > packing){
		return
		
	}else{
	return splitTriangle(New_Points,packing)
	}	
}

function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	
	createCanvas(lengthcanvas, widthcanvas);
	background(255)

for (var j = 50; j < 950; j = j + 100){

	point1 = new Point(50,j)
	point2 = new Point(950,j)
	point3 = new Point(50,j+100)
	point4 = new Point(950,j+100)
	
	Points = [[point1, point2, point3]]

	noStroke()
	//fill(255-(Points.length*-1)*255, 0, 128);
	fill(Math.floor(map(Math.random(),0,1,0.6,0.9)*255),180,180)
	beginShape(TRIANGLES)
	vertex(point1.x,point1.y)
	vertex(point2.x,point2.y)
	vertex(point3.x,point3.y)
	endShape(CLOSE)
	
	splitTriangle(Points,Math.floor(j/8))
	
	Points2 = [[point2, point3, point4]]
	//fill(255-(Points.length*-1)*255, 0, 128);
	fill(Math.floor(map(Math.random(),0,1,0.6,0.9)*255),180,180)
	beginShape(TRIANGLES)
	vertex(point4.x,point4.y)
	vertex(point2.x,point2.y)
	vertex(point3.x,point3.y)
	endShape(CLOSE)
	splitTriangle(Points2,Math.floor(j/8))
	//triangle(point1.x, point1.y, point2.x, point2.y, point3.x, point3.y)
	//New_Coords = DrawSubTriangles(Points)
	
	}

save('myImage.jpg');
}

function draw() {

}