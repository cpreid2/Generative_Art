var t = 0.1
var squareSize = 100
var spacing = 20
function preload() {
  img = loadImage("https://c2.staticflickr.com/2/1868/42546562200_227eb51188_b.jpg");

}

function setup() {
  rectMode(CENTER)
  img.resize(img.width/1.3, img.height/1.3)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(0)
  img.loadPixels();
  loadPixels()

  points = []
  for (x = 0; x < img.width; x = x +spacing){
      for (y = 0; y < img.height; y = y +spacing){

    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    fill(r,b,g,a*noise(x,y))
    noStroke()

    push()
    translate(x,y)
    rotate(30)
    rect(0, 0, squareSize*noise(x,y), squareSize*noise(x,y))
    pop()
  }
}

}


function draw() {
    background(0)
  points = []
  for (x = 0; x < img.width; x = x +spacing){
      for (y = 0; y < img.height; y = y +spacing){

    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    fill(r,b,g,a*noise(x,y,t))
    noStroke()

    push()
    translate(x,y)
    rotate(30+t)
    rect(0, 0, squareSize*noise(x,y,t), squareSize*noise(x,y,t))
    pop()
}
}
t=t+0.01

}
