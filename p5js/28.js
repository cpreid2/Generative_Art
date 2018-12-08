var t = 0.1
function setup() {

  createCanvas(1000, 1000);

}


function draw() {
	background(15)
	points = []
	for (i = 0; i < 25; i++){
		points.push([noise((i)*t)*1000,noise((i+100)*t)*1000])
	}
	points.push([0,0])
	points.push([1000,1000])
	points.push([0,1000])
	points.push([1000,0])
	points.push([500,0])
	points.push([500,1000])
	points.push([0,500])
	points.push([1000,500])

	points.push([750,0])
	points.push([750,1000])
	points.push([0,750])
	points.push([1000,750])

	points.push([250,0])
	points.push([250,1000])
	points.push([0,250])
	points.push([1000,250])
	const delaunay = Delaunator.from(points);

	let triangle_points = [];
	for (let triangle_id = 0; triangle_id < delaunay.triangles.length / 3; triangle_id++) {
		triangle_points = []
			for (var i = 0; i < 3; i++) {
					let halfedge_id = 3*triangle_id + i;
					let point_id = delaunay.triangles[halfedge_id];
					triangle_points.push(points[point_id]);
			}
			stroke(255)
			strokeWeight(2)
		 line(triangle_points[0][0],triangle_points[0][1],triangle_points[1][0],triangle_points[1][1])
		 line(triangle_points[0][0],triangle_points[0][1],triangle_points[2][0],triangle_points[2][1])
		 line(triangle_points[1][0],triangle_points[1][1],triangle_points[2][0],triangle_points[2][1])
	}
	t = t +0.00004

}
