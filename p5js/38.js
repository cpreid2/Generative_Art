var raw;
var processed;
var images;
var nOff = 0
var curveSize = 50

var w;
var h;

function preload() {
img = loadImage('https://www.nasa.gov/sites/default/files/thumbnails/image/32109555763_eb9bb215ef_k.jpg')
raw = img
}

function setup() {
  w = img.width
  h = img.height
  processed = createImage(img.width, img.height);

  createCanvas(img.width, img.height)

  background(30,30,30)
  textSize(16)
  fill(255)
  do_grey();

  do_blur();
  do_sobel();

  do_thinning();

  //do_threshold();
  //image(processed,0,0)

  processed.loadPixels();
  loadPixels();

  points = []
  noFill()
  stroke(0,0,0)
  for (x = 0; x < w; x = x+5){
    for (y = 0; y < h; y = y+5){
      index = (floor(x) + floor(y) * img.width) * 4;

      r = processed.pixels[index]
      b = processed.pixels[index + 1]
      g = processed.pixels[index + 2]
      a = processed.pixels[index + 3]

      r_raw = img.pixels[index]
      b_raw = img.pixels[index + 1]
      g_raw = img.pixels[index + 2]
      a_raw = img.pixels[index + 3]

      brightness = (r + b + g) / 3;
      //fill(r_raw,b_raw,g_raw,15)
      stroke(r_raw,b_raw,g_raw,50)
      strokeWeight(2)
      //noStroke()
      if (brightness < 30){
        beginShape()
        for ( lines = 0 ; lines < floor(Math.random()*200); lines++){
          curveVertex(x + map(Math.random(),0,1,-curveSize,curveSize), y+map(Math.random(),0,1,-curveSize,curveSize))
          //ellipse(x,y,brightness/6)
        }
        endShape()
      }
    }
  }

}



function draw() {

}

function do_grey() {
  processed.copy(raw, 0, 0, w, h, 0, 0, w, h);
  processed.filter(GRAY);
}

function do_blur(){
  //processed.filter(BLUR, 1);

}

function do_sobel() {
  apply_sobel_filter(processed);
}

function do_thinning() {
  processed.filter(ERODE)
}

function do_threshold(){
  processed.filter(THRESHOLD, 0.1);
}

function copy_from_to(from, to) {
  to.copy(from, 0, 0, w, h, 0, 0, w, h);
}
