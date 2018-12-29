var t = 0.1
var nOff = 0
var scribbleSize = 20
function preload() {
  img = loadImage("https://c2.staticflickr.com/6/5558/15004940512_9490b4f0df_b.jpg");

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
    stroke(0,0,0,map(brightness,0,255,30,80))
    strokeWeight(0.9)
    nOff++
    beginShape()
    points = []
    for (lines = 0; lines < floor(brightness/3); lines++){
      curveVertex(x + map(Math.random(),0,1,-brightness,brightness), y+map(Math.random(),0,1,-brightness,brightness))
    }
    endShape()


  }

}


function draw() {



}
