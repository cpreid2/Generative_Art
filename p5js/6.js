function circle_lines(radius,linerot, linelen){

for (i = 0;i<360;i++){
push()
rotate(i/360*TWO_PI)
line(random()*radius*linerot,0+radius,0,linelen)
pop()
}
}

function setup() {
var dimension = 1000
createCanvas(dimension, dimension);
background(0)

translate(dimension/2,dimension/2)
stroke(255)
strokeWeight(0.2)
circle_lines(12.5,1.9,12.5)
strokeWeight(0.6)
circle_lines(25,-1.9,25)
strokeWeight(0.7)
circle_lines(50,1.9,50)
strokeWeight(0.8)
circle_lines(100,-1.80,100)
strokeWeight(1)
circle_lines(200,1.79
,200)
strokeWeight(1)
circle_lines(400,-1.8,400)
}

function draw() {

}