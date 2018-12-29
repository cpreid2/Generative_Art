
function preload() {
  img = loadImage("https://c2.staticflickr.com/6/5632/29895745533_50ed3ec7aa_b.jpg");
}

function setup() {
  img.resize(img.width, img.height)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(230,230,230)
  noFill()
  img.loadPixels();
  loadPixels()

  points = []
  for (i = 0; i < 20000; i++){

    x = Math.random()*img.width
    y = Math.random()*img.height
    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    brightness = (floor((r + b + g) / 3))/4
    stroke(r,b,g)
    strokeWeight(4)
    line(x,y,x+5,y+5)

  }

}


function draw() {



}
