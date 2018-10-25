var noise_t = 0.004;
var lengthcanvas = 500
var widthcanvas = 500

function calculateField(columns, rows, noiseZ) {
  field = new Array()
  for(let x = 0; x < columns; x++) {
  	field[x] = new Array()
    for(let y = 0; y < rows; y++) {
      let angle = noise(x/50, y/50, noiseZ) * Math.PI * 2;
      let length = noise(x/10 + 40000, y/10 + 40000, noiseZ);
      field[x][y] =  [angle,length];
    }
  }
  return field
}

function setup() {

	createCanvas(lengthcanvas, widthcanvas);

}
function draw() {

background(255)

	noise_field = calculateField(lengthcanvas/10,widthcanvas/10,noise_t)
	for (i = 0; i < lengthcanvas/10; i = i + 1){
	for (j = 0; j < lengthcanvas/10; j = j + 1){
	angle = noise_field[i][j][0]
	length = noise_field[i][j][1] * 10
	
	push()
	beginShape()
	translate(i*10,j*10)
	rotate(angle)
	vertex(0,0)
	vertex(length, length)
	
	endShape()
	pop()
	}
	}
	
	noise_t = noise_t + 0.004

}