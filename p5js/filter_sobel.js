// Prewitt
var xKernel = [
  [-1, 0, 1],
  [-1, 0, 1],
  [-1, 0, 1]
];
var yKernel = [
  [-1, -1, -1],
  [0, 0, 0],
  [1, 1, 1]
];

// Sobel
// var xKernel = [
//   [1, 0, -1],
//   [2, 0, -2],
//   [1, 0, -1]
// ];
// var yKernel = [
//   [1, 2, 1],
//   [0, 0, 0],
//   [-1, -2, -1]
// ];

function apply_sobel_filter(img) {
  img.loadPixels();
  var n = img.width * img.height;
  var sobel_array = new Uint32Array(n);

  // compute the gradient in soble_array
  var index;
  var x, y;
  var xk, yk;
  var xGradient, xMultiplier;
  var yGradient, yMultiplier;
  var pixelValue;
  for (x = 1; x < img.width - 1; x++) {
    for (y = 1; y < img.height- 1; y++) {
      i = x + y * img.width;
      xGradient = 0;
      yGradient = 0;
      for (xk = -1; xk <= 1; xk ++) {
        for (yk = -1; yk <= 1; yk ++) {
          pixelValue = img.pixels[4 * ((x + xk) + (y + yk) * img.width)];
          xGradient += pixelValue * xKernel[yk + 1][xk + 1];
          yGradient += pixelValue * yKernel[yk + 1][xk + 1];
        }
      }
      sobel_array[i] = Math.sqrt(
        Math.pow(xGradient, 2) + Math.pow(yGradient, 2)
      );
    }
  }

  // copy sobel_array to image pixels;
  for (x = 0; x < img.width; x++) {
    for (y = 0; y < img.height; y++) {
      i = x + y * img.width;
      img.pixels[4 * i] = sobel_array[i];
      img.pixels[4 * i + 1] = sobel_array[i];
      img.pixels[4 * i + 2] = sobel_array[i];
    }
  }
  img.updatePixels();
}
