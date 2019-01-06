
var canvasWidth = 800
var canvasHeight = 800
var spacing = 20

function setup() {

  createCanvas(canvasWidth, canvasHeight);

  background(0)

  greens = randomColor({
   count: 10,
   hue: 'red'
});

blues = randomColor({
 count: 10,
 hue: 'blue'
});

reds = randomColor({
 count: 10,
 hue: 'red'
});


  for (x = 0; x <= canvasWidth; x = x +spacing){
      for (y = -20; y < canvasHeight; y = y +5){

    pickTwo = Math.random();
    if (pickTwo <0.3){
      stroke1 = reds[floor(Math.random()*10)]
      stroke2 = greens[floor(Math.random()*10)]
    }else if (pickTwo > 0.3 || pickTwo < 0.6){
      stroke1 = reds[floor(Math.random()*10)]
      stroke2 = blues[floor(Math.random()*10)]
    }else{
      stroke1 = blues[floor(Math.random()*10)]
      stroke2 = greens[floor(Math.random()*10)]
    }
    strokeWeight(3)
    push()
    translate(x,y)
    if (Math.random() > 0.5){
      stroke(stroke2)
      stroke2 = stroke1
    }else{
      stroke(stroke1)
    }
    line(0,0,-spacing/2,spacing/2)
    stroke(stroke2)
    line(0,0,spacing/2,spacing/2)
    pop()
  }
}
save("Chevron.jpg")
}


function draw() {

}
