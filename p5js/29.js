var t = 0.1

function preload() {
  img = loadImage("https://www.nasa.gov/sites/default/files/1-bluemarble_west.jpg");

}

function setup() {
  img.resize(img.width/1.5, img.height/1.5)
  createCanvas(img.width, img.height);

}


function draw() {

    pixelDensity(1)
    background(255)
    img.loadPixels();
    loadPixels()

  points = []
  for (i = 0; i < 1000; i++){
  		points.push([Math.random()*img.width,Math.random()*img.height])
  	}
    points.push([0,0])
    points.push([0,img.height])
    points.push([img.width,img.height])
    points.push([img.width,0])

  	const delaunay = Delaunator.from(points);

  	let triangle_points = [];
  	for (let triangle_id = 0; triangle_id < delaunay.triangles.length / 3; triangle_id++) {
  		triangle_points = []
  			for (var i = 0; i < 3; i++) {
  					let halfedge_id = 3*triangle_id + i;
  					let point_id = delaunay.triangles[halfedge_id];
  					triangle_points.push(points[point_id]);
  			}

        center_x = (triangle_points[0][0] + triangle_points[1][0] + triangle_points[2][0]) / 3
        center_y = (triangle_points[0][1] + triangle_points[1][1] + triangle_points[2][1]) / 3

        index = (floor(center_x) + floor(center_y) * img.width) * 4;

        r = img.pixels[index]
        b = img.pixels[index + 1]
        g = img.pixels[index + 2]
        a = img.pixels[index + 3]

        fill(r,b,g,a)
        stroke(r,b,g,a)
        strokeWeight(1)
        beginShape()
        vertex(triangle_points[0][0],triangle_points[0][1])
        vertex(triangle_points[1][0],triangle_points[1][1])
        vertex(triangle_points[2][0],triangle_points[2][1])
       endShape()
  	}

}
