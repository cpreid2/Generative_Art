

function setup() {
createCanvas(700, 700);

}

function draw() {
clear()
background(0)
for (i = 0; i <= 360; i = i + i){

push()
translate(i,350+sin(frameCount*0.05)*50)
fill(255)
ellipse(0,0,50,50)
pop()
}
}