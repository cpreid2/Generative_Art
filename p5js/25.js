var font;

var textTyped = "F O C U S "
var fontSize = 180;
var padding = 50;
var nOff = 0;
var pointDensity= 4;

var colors;

var paths;
var textImg;

function preload() {
  font = loadFont('http://localhost:8000/Arial Bold Italic.ttf');
}

function setup() {
  createCanvas(800, 800);
  frameRate(25);
  rectMode(CENTER);
  pixelDensity(1);
  setupText();
}

function setupText() {
  // create an offscreen graphics object to draw the text into
  console.log(width,height)
  textImg = createGraphics(width, height);
  textImg.pixelDensity(1);
  textImg.background(255);
  textImg.textFont(font);
  textImg.textAlign(CENTER, CENTER);
  for (i = 1; i < 14; i = i + 1){
  push()
  size = i*2
  textImg.textSize(size)
  textImg.text(textTyped, 400, 30+i*i*4);
  pop()
  }
  textImg.loadPixels();
}

function draw() {
  background(color(128, 0, 128));

  nOff++;

  for (var x = 0; x < textImg.width; x += pointDensity) {
    for (var y = 0; y < textImg.height; y += pointDensity) {
      // Calculate the index for the pixels array from x and y
      var index = (x + y * textImg.width) * 4;
      // Get the red value from image
      var r = textImg.pixels[index];

      if (r < 128) {

          stroke(0, 0, 0);
          strokeWeight(1);
          noStroke();

          var num = random(1);

         fill('#e7b416')

          push();

          ellipse(x,y,7*(random()))

          pop();

        }

      }
    }
  }
