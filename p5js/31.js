var t = 0.1

function preload() {
  img = loadImage("http://0.0.0.0:8000/colin/Downloads/IMG_6606.JPG");

}

function setup() {
  img.resize(img.width/3, img.height/3)
  createCanvas(img.width, img.height);


      pixelDensity(1)
      background(220)
      img.loadPixels();
      loadPixels()

    points = []
    for (i = 0; i < 3000; i++){
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

          fill(r,b,g,a/4)
          stroke(r,b,g,a)
          noStroke()
          strokeWeight(1)
          ellipse(triangle_points[0][0],triangle_points[0][1],dist(triangle_points[0][0],triangle_points[0][1],triangle_points[1][0],triangle_points[1][1])/1.5)
          //ellipse(triangle_points[1][0],triangle_points[1][1],2+dist(triangle_points[1][0],triangle_points[1][1],triangle_points[1][0],triangle_points[1][1]))
          //ellipse(triangle_points[2][0],triangle_points[2][1],3+dist(triangle_points[2][0],triangle_points[2][1],triangle_points[0][0],triangle_points[0][1]))
          fill(r,b,g,a/1.5)
          beginShape()
          vertex(triangle_points[0][0],triangle_points[0][1])
          vertex(triangle_points[1][0],triangle_points[1][1])
          vertex(triangle_points[2][0],triangle_points[2][1])
          endShape()
    	}
}


function draw() {
  if (keyIsPressed) {
  save('IMAGE.jpg')
  }

}
