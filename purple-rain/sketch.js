class RainDrop {
	constructor() {
		this.x = random(0, width)
		this.y = random(-1000, 0)
		this.z = random(0, 40)
		this.ySpeed = map(this.z, 0, 40, 8, 6)
		this.len = map(this.z, 0, 40, 10, 20)
		this.weight = map(this.z, 0, 40, 3, 1)
	}
	
	fall() {
		this.y = this.y + this.ySpeed
		this.ySpeed += map(this.z, 0, 40, 0, 0.005)
		if (this.y > height) {
			this.hit()
			this.ySpeed = map(this.z, 0, 40, 10, 4)
			this.x = random(0, width)
			this.y = random(-200, -100)
		}
	}

	display() {
		stroke(138, 43, 226)
		strokeWeight(this.weight)
		line(this.x, this.y, this.x, this.y + this.len)
	}

	hit() {
		stroke(0,76, 163)
		fill(0,76,163, random(100, 250))
		for (let i = 0; i < 5; i = i + 1) {
			let r = random(3,8)
			ellipse(this.x + random(-15,15), height - random(0,30), r, r)
		}
		
	}

}

let drops = [];
let isLoop = true

function setup() {
	createCanvas(windowWidth, windowHeight);
	for (let i = 0; i < 500; i = i + 1) {
		drops[i] = new RainDrop()
	}
}

function draw() {
	background(230, 230, 250);
	noStroke();
	for (let i = 0; i < 500; i = i + 1) {
		drops[i].fall()
		drops[i].display()
	}
}

function mousePressed(){
	if(isLoop === true){
		noLoop()
		isLoop = false
	}
	else{
		loop()
		isLoop = true
	}
}