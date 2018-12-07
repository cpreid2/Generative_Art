var canvas_width = 1600
var canvas_height = 1600

var scl = 20;

var rows = canvas_height / scl;
var cols = canvas_width / scl;

var z = 0


function setup() {
createCanvas(canvas_width, canvas_height);
background(10)
particles = []
numParticles = 800;
for (i = 0; i < numParticles; i ++){
particles[i] = new Particle(0, Math.random() * canvas_height, 5, 5)
}

}


function draw() {

var flowfield = [rows*cols]
for (y = 0 ; y < rows; y++){
	for (x = 0; x < cols; x++){
	var index = y + x * cols
	
	var diffX = x * scl;
	var diffY = y * scl;
	var angle = Math.atan2(diffY, diffX);
	
	var angle = noise(x/5+5, y/5+5,z) * TWO_PI*2 ;
	//var angle = sin(x/100)*TWO_PI;
	forcefield = p5.Vector.fromAngle(angle)
	forcefield.setMag(0.5)
	flowfield[index] = forcefield
	//push()
	//translate(x*scl,y*scl)
	//rotate(forcefield.heading())
	//stroke(0)
	//line(0,0,scl,0)
	//pop()
	}
}


for (i = 0; i < particles.length; i++){

particles[i].show()
particles[i].update()
particles[i].edge()
particles[i].follow(flowfield)


}

z = z + 0.0005
}

function Particle(x,y,r){
	this.x = x;
	this.y = y;
	this.r = r;
	this.pos = createVector(this.x, this.y);
	this.vel = createVector(0, 0);
	this.acc = createVector(0, 0);
	this.maxspeed = 3;

	this.show = function() {
		if (this.vel.mag() < 0.8){
		fill(10)
		}
		else{
        fill(220,4);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.r, this.r);
        }
       }
       
    this.follow = function(vectors){
    	var x_follow = floor(this.pos.x / scl)
    	var y_follow = floor(this.pos.y / scl)
    	var index = x_follow + y_follow * cols
    	var force = vectors[index]
    	this.applyForce(force)
    }
    
    this.applyForce = function(force){
    	this.acc.add(force)
    }
       
    this.update = function(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.acc.mult(0);
        this.vel.limit(this.maxspeed);
    }
    
	this.edge = function() {
        if (this.pos.x > canvas_width) {
        	this.pos.x = Math.random()*canvas_width;
        	this.pos.y = Math.random()*canvas_height
        	}
        if (this.pos.y > canvas_height) {
        	this.pos.x = Math.random()*canvas_width;
        	this.pos.y = Math.random()*canvas_height
        	}
        	
        if (this.pos.x < 0) {
        	this.pos.x = 0*canvas_width;
        	this.pos.y = Math.random()*canvas_height
        	}
        if (this.pos.y < 0) {
        	this.pos.x = 0*canvas_width;
        	this.pos.y = Math.random()*canvas_height
        	}
       }
       
}
