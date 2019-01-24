var raw;
var processed;
var images;
var nOff = 0
var curveSize = 150

var w;
var h;

function preload() {
img = loadImage('https://c1.staticflickr.com/5/4259/35186536251_14c3c50a70_b.jpg')
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
      curveSize = 150 * noise(x/100,y/100)
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
      if (Math.random() < 0.4){
        fill(r_raw,b_raw,g_raw,28)
      }
      //fill(r_raw,b_raw,g_raw,15)
      stroke(r_raw,b_raw,g_raw,40)
      strokeWeight(1*Math.random())
      //noStroke()
      //noFill()

      if (brightness < 255){
        beginShape()
        for ( lines = 0 ; lines < floor(Math.random()*400); lines++){
          curveVertex(x + map(Math.random(),0,1,-curveSize,curveSize), y+map(Math.random(),0,1,-curveSize,curveSize))
          //ellipse(x,y,brightness/6)
        }
        endShape()
      }
    }
  }
save("Thing.jpg")
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
