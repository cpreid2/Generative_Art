var t = 0.1

function preload() {
  img = loadImage("http://0.0.0.0:8000/GAMAYCOLOR.jpg");

}

function setup() {
  img.resize(3600, 1800)
  createCanvas(3600, 1800);
  pixelDensity(1)
  background(200)
  img.loadPixels();
  loadPixels()

  points = []
  translate(-15,-15)
  for (i = 0; i <150000; i++){
    scalex = 100*Math.random()
    scaley = 100
    x = Math.random()*img.width
    y = Math.random()*img.height
    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    fill(r,b,g,a/6)
    noStroke()
    //beginShape()
    //curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    //curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    //curveVertex(x,y)
    //curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    //curveVertex(x+Math.random()*scalex,y+Math.random()*scaley)
    //endShape()
    //strokeWeight(8*Math.random())
    //stroke(r,b,g,a/(4*map(Math.random(),0,1,0.2,0.6)))
    //line(x+Math.random()*40,y,x+scalex,y+scaley*Math.random())

    if (Math.random() > 0.95){
      ellipse(x,y,180*noise(i/10),130*noise(i/100))
    }else{
      ellipse(x,y,100*Math.random(),80*Math.random())
    }
  }

save("EDELZ.jpg")
}


function draw() {



}
