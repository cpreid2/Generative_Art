var font;

var textTyped = "C O C O"
var fontSize = 180;
var padding = 400;
var nOff = 0;
var pointDensity= 12;

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
  textImg.textSize(fontSize)
  textImg.text(textTyped, 50, fontSize + 290);
  textImg.text(textTyped, 50, fontSize + 30);
  textImg.text(textTyped, 50, fontSize + 550);
  textImg.loadPixels();
}

function draw() {
  background('#363636');

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

          if (num < 0.3) {
            fill('#A8A7A7')
          } else if (num < 0.7) {
            fill('#CC527A')
          } else {
            fill('#E8175D')
          }

          push();
          beginShape();
          for(var i =0; i < 4; i ++){
          var ox = (noise((i*1000 + x-nOff)/50, (i*3000 + y+nOff)/30) - 0.5) * pointDensity*5;
          var oy = (noise((i*2000 + x-nOff)/50, (i*4000 + y+nOff)/30) - 0.5) * pointDensity*5;
            curveVertex(x + ox, y + oy);
          }
          endShape(CLOSE)
          pop();

        }

      }
    }
    if (keyIsPressed && key == 's') {
    save('IMAGE.jpg')
    }
  }
