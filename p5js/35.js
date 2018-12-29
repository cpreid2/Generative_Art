// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 16-6: Drawing a grid of squares

// Size of each cell in the grid, ratio of window size to video size
// 40 * 16 = 640
// 30 * 16 = 480
var videoScale = 20;
var nOff = 0;

// Number of columns and rows in our system
var cols, rows;

function setup() {
  createCanvas(1280, 960);

  // Initialize columns and rows
  cols = width/videoScale;
  rows = height/videoScale;

  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(cols, rows);
  video.hide();
}

function mousePressed() {
}

function draw() {
  background(0);
  video.loadPixels();

  nOff++;

  // Begin loop for columns
  for (var i = 0; i < cols; i++) {
    // Begin loop for rows
    for (var j = 0; j < rows; j++) {
      // Reversing x to mirror the image
      // In order to mirror the image, the column is reversed with the following formula:
      // mirrored column = width - column - 1
      var loc = ((cols - i - 1) + j * cols) * 4;

      // The functions red(), green(), and blue() pull out the three color components from a pixel.
      var r = video.pixels[loc   ];
      var g = video.pixels[loc + 1];
      var b = video.pixels[loc + 2];

      // A rectangle size is calculated as a function of the pixel's brightness.
      // A bright pixel is a large rectangle, and a dark pixel is a small one.
      var brightness = (r+g+b)/3;
      var sz = 0
      if (brightness < 95){
        sz = map(brightness, 0, 255, videoScale, 0);
      }

      rectMode(CENTER);
      fill(255);
      noStroke();
      // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
      var x = i*videoScale;
      var y = j*videoScale;

      //rect(x + videoScale/2, y + videoScale/2, sz, sz);
      stroke(0, 0, 0);
      strokeWeight(1);
      noStroke();
      fill('#A8A7A7')
      beginShape();
      for(var m =0; m < 5; m ++){
      var ox = (noise((m*1000 + x-nOff)/50, (m*3000 + y+nOff)/30) - 0.5)*sz*3;
      var oy = (noise((m*2000 + x-nOff)/50, (m*4000 + y+nOff)/30) - 0.5)*sz*3;
        curveVertex(x + ox, y + oy);
      }
      endShape(CLOSE)
    }
  }
}
