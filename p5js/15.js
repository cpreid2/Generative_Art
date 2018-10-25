function colorPicker(){
c1 = color(208, 104, 34)
c2 = color(208, 145, 34)
c3 = color(33, 74, 138)
c4 = color(21, 132, 113)

var randomNum = Math.random()

if (randomNum <0.25){
linecolor = c1
} else if (randomNum <0.50 && randomNum > 0.25){
linecolor = c2
} else if (randomNum <0.75 && randomNum > 0.50){
linecolor = c3
} else{
linecolor = c4
}
return linecolor
}

function arc_circle(x,y,start, end, spacing, startpt, endpt,weight){
    for (var i = start; i < end; i = i + spacing){
	  push()
	  strokeWeight(weight)
	  stroke(colorPicker())
	  randomstart= map(noise(i), 0, 1, startpt[0], startpt[1])
	  randomend = map(Math.random(), 0, 1, endpt[0], endpt[1])
	  arc(x, y, i, i, radians(randomstart), radians(randomend));
	  pop()
	  }
}

function setup() {
	var lengthcanvas = 1000
	var widthcanvas = 1000
	
	createCanvas(lengthcanvas, widthcanvas);
	background(230)
	noFill()
for (z = 200; z < 1000; z = z + 200){
	for (j = 0; j < 2; j++){
	arc_circle(200,z,25,200,20,[0,180],[180,360],7)
	}
	
	for (j = 0; j < 20; j++){
	arc_circle(400,z,25,200,20,[0,90],[0,540],6)
	}
	
	for (j = 0; j < 2; j++){
	arc_circle(600,z,25,200,20,[0,180],[180,360],7)
	}
	
	for (j = 0; j < 20; j++){
	arc_circle(800,z,25,200,20,[0,90],[0,540],6)
	}
	
	}
	save('myImage.jpg');
}

function draw() {

}