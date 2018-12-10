var t = 0.1

function preload() {
  img = loadImage("https://c1.staticflickr.com/1/792/41020635871_aebaa235b4_b.jpg");

}

function setup() {

  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(255)
  img.loadPixels();
  loadPixels()

 coords = []
  for (x= 0; x < img.width; x ++){
    for (y = 0; y < img.height; y ++){
    	index = (x + y * img.width) * 4;
        r = img.pixels[index]
        b = img.pixels[index + 1]
        g = img.pixels[index + 2]
        a = img.pixels[index + 3]

      	brightness = (r + g + b) / 3;
      	stroke(0.1)
      	noFill()
      	if (brightness <135 && brightness > 20){
      	coords.push({x_loc: x, y_loc: y})

      	}
    }
  }

points = []
for (i = 0; i < 500; i++){
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
      noStroke()
      beginShape()
      vertex(triangle_points[0][0],triangle_points[0][1])
      vertex(triangle_points[1][0],triangle_points[1][1])
      vertex(triangle_points[2][0],triangle_points[2][1])
     endShape()
	}
  if (keyIsPressed == true) {  // If the key is pressed,
    save('IMAGE.jpg')      // draw a line;
  }
}


function draw() {

}
