  function preload() {
  img = loadImage("http://localhost:8000/Downloads/DSCF0282.jpg"); 
  
}

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function one_or_zero(){

random_num = Math.random()

number = 'Gabriel'

if (random_num > 0.5){
number = 'gabriel'
}
return number
}

function setup() {
  img.resize(img.width/4,img.height/4)
  createCanvas(img.width, img.height);
  pixelDensity(1)
  background(10)
  g_index = 0
  img.loadPixels();
  loadPixels()
 
 coords = []
  for (x= 0; x < img.width; x ++){
    for (y = 0; y < img.height; y ++){
    	index = (x + y * img.width) * 4;
        r = img.pixels[index]
        b = img.pixels[index + 1]
        g = img.pixels[index + 2]
        a = img.pixels[index + 3]
      
      	brightness = (r + g + b) / 3;
      	stroke(0.1)
      	if (brightness <135 && brightness > 20){
      	coords.push({x_loc: x, y_loc: y})
		  	
      	}
    }
  } 

  for (y= 0; y < img.height; y = y + 10){
    for (x = 0; x < img.width; x = x + 10){
    
    index = (x + y * img.width) * 4;
    r = img.pixels[index]
    b = img.pixels[index + 1]
    g = img.pixels[index + 2]
    a = img.pixels[index + 3]
    
    brightness = (r + g + b) / 3;
    fill(206, 17, 38)
    textSize(2 + 8*brightness/200)
    text(one_or_zero(),x,y)
    
    }
	}
	
}
function draw() {

}