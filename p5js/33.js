var t = 0.1

function preload() {
  img = loadImage("https://c2.staticflickr.com/4/3800/10586242024_dc99b19035_b.jpg");

}

function setup() {
  img.resize(img.width, img.height)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(255)
  img.loadPixels();
  loadPixels()

  points = []

  for (i = 0; i <50000; i++){
scalex = 20*Math.random()
scaley = 50
    x = Math.random()*img.width
    y = Math.random()*img.height
    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    fill(r,b,g,a/2.5)
    noStroke()
    beginShape()
    curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    curveVertex(x,y)
    curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    endShape()
    strokeWeight(3.5*Math.random())
    stroke(r,b,g,a/(4*map(Math.random(),0,1,0.3,0.6)))
    line(x+Math.random()*40,y,x+scalex,y+scaley*Math.random())
  }


}


function draw() {



}
