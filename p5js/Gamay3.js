var t = 0.1
var nOff = 0
var scribbleSize = 70
function preload() {
  img = loadImage("http://0.0.0.0:8000/GAMAYCOLOR.jpg");

}

function setup() {
  img.resize(3600, 1800)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(230,230,230)
  noFill()
  img.loadPixels();
  loadPixels()

  points = []
  for (i = 0; i < 40000; i++){

    x = Math.random()*img.width
    y = Math.random()*img.height
    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    brightness = (floor((r + b + g) / 3))
    stroke(r,b,g,50)
    strokeWeight(7)
    noFill()
    nOff++
    beginShape()
    for (lines = 0; lines < 15; lines++){
      curveVertex(x + map(Math.random(),0,1,-scribbleSize,scribbleSize), y+map(Math.random(),0,1,-scribbleSize,scribbleSize))
    }
    endShape()


  }
save("FINAL.jpg")
}


function draw() {



}
