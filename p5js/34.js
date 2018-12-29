class triangle_circle {
  constructor(x_off, y_off, r, triangle_fill) {
    this.x_off = x_off;
    this.y_off = y_off;
    this.r = r;
    this.triangle_fill = triangle_fill;
    this.points = [];
  }

  createPoints() {

    for (i = 0; i < this.triangle_fill; i++) {
      var dSquared = map(Math.random(), 0, 1, 0, this.r * this.r)
      var theta = map(Math.random(), 0, 1, 0, TWO_PI)
      var x = sqrt(dSquared) * Math.cos(theta)
      var y = sqrt(dSquared) * Math.sin(theta)
      this.points.push([x + this.x_off, y + this.y_off])
    }

    for (i = 0; i < floor(this.r / 5); i++) {
      var dSquared = map(Math.random(), 0, 1, this.r * this.r, this.r * this.r)
      var theta = map(Math.random(), 0, 1, 0, TWO_PI)
      var x = sqrt(dSquared) * Math.cos(theta)
      var y = sqrt(dSquared) * Math.sin(theta)
      this.points.push([x + this.x_off, y + this.y_off])
    }

    const delaunay = Delaunator.from(this.points);

    let triangle_points = [];
    for (let triangle_id = 0; triangle_id < delaunay.triangles.length / 3; triangle_id++) {
      triangle_points = []
      for (var i = 0; i < 3; i++) {
        let halfedge_id = 3 * triangle_id + i;
        let point_id = delaunay.triangles[halfedge_id];
        triangle_points.push(this.points[point_id]);
      }
      stroke(0)
      strokeWeight(1.4)
      fill(floor(map(Math.random(),0,1,0,255)), 0, 0,100)
      beginShape()
      vertex(triangle_points[0][0], triangle_points[0][1])
      vertex(triangle_points[1][0], triangle_points[1][1])
      vertex(triangle_points[2][0], triangle_points[2][1])
      endShape()
    }
    ellipse(this.x_off, this.y_off, this.r * 2)

  }
}

function setup() {

  createCanvas(1000, 1000);
  background(15)
  circles = []
  var jitter = 150
  for (var i = 0; i < 1000; i++) {
    var center_x = Math.random()*1000
    var center_y = Math.random()*1000
    triangle = new triangle_circle(center_x, center_y, map(Math.random(),0,1,25,150), floor(map(Math.random(),0,1,15,50)));
    triangle.createPoints()
  }
}


function draw() {

}
