var t = 0.1

function preload() {
  img = loadImage("http://0.0.0.0:8000/colin/Downloads/IMG_6606.JPG");

}

function setup() {
  img.resize(img.width/4, img.height/4)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(255)
  img.loadPixels();
  loadPixels()

  points = []
  for (i = 0; i < 2000; i++){

    x = Math.random()*img.width
    y = Math.random()*img.height
    index = (floor(x) + floor(y) * img.width) * 4;

    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]

    fill(r,b,g,a/4)
    noStroke()
    random_num = Math.random()
    if (random_num < 0.2){
    ellipse(x,y,Math.random()*20,Math.random()*1000)
  } else if ( random_num > 0.2 &&  random_num < 0.4){
    ellipse(x,y,Math.random()*40,Math.random()*20)
  } else{
    fill(r,b,g,a)
    ellipse(x,y,Math.random()*35)
  }

  }

}


function draw() {



}
