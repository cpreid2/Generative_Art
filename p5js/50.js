var t = 0.1

var blues = randomColor({
 count: 100,
 hue: 'blue',
 alpha: 0.5
});

var greens = randomColor({
 count: 100,
 hue: 'green',
 alpha: 0.5
});

var reds = randomColor({
 count: 100,
 hue: 'red',
 alpha: 0.5
});

class triangleShape{
constructor (numPts,rectWidth,rectHeight,offsetX,offsetY,colors){
  this.numPts = numPts
  this.rectWidth = rectWidth
  this.rectHeight = rectHeight
  this.offsetX = offsetX
  this.offsetY = offsetY
  this.colors = colors
  this.points = []
}

display(){

  // Create array of points
  push()
  translate(this.offsetX,this.offsetY)
  for (var i = 0; i < this.numPts; i++){
		this.points.push([Math.random()*this.rectWidth,Math.random()*this.rectHeight])
	}
  for (var j = 0; j < this.rectWidth/10; j = j + 100){
    this.points.push([j,0])
  }
  this.points.push([0,this.rectHeight])
  this.points.push([this.rectWidth,0])
  this.points.push([0,0])
  this.points.push([this.rectWidth,this.rectHeight])
  // Perform Triangulation
  let delaunay = Delaunator.from(this.points);
  let triangle_points = [];
	for (let triangle_id = 0; triangle_id < delaunay.triangles.length / 3; triangle_id++) {
      triangle_points = []
			for (var i = 0; i < 3; i++) {
					let halfedge_id = 3*triangle_id + i;
					let point_id = delaunay.triangles[halfedge_id];
					triangle_points.push(this.points[point_id]);
			}
			noStroke()
			strokeWeight(1)
      fill(this.colors[floor(Math.random()*this.colors.length)])
      beginShape()
      vertex(triangle_points[0][0],triangle_points[0][1])
      vertex(triangle_points[1][0],triangle_points[1][1])
      vertex(triangle_points[2][0],triangle_points[2][1])
		 //line(triangle_points[0][0],triangle_points[0][1],triangle_points[1][0],triangle_points[1][1])
		 //line(triangle_points[0][0],triangle_points[0][1],triangle_points[2][0],triangle_points[2][1])
		//line(triangle_points[1][0],triangle_points[1][1],triangle_points[2][0],triangle_points[2][1])
     endShape()
	}
  pop()
}


}

function setup() {


  createCanvas(1000, 1000);
  background(15)
  triangle = new triangleShape(1000,500,500,0,0,greens)
  triangle.display()
  triangle = new triangleShape(500,1000,1000,0,500,reds)
  triangle.display()
  triangle = new triangleShape(500,500,1000,500,0,blues)
  triangle.display()




}

function draw() {


	t = t +0.00004

}
