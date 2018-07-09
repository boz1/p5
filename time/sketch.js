let w = 0
let h = 0
let sec = 0
let min = 0
let hr = 0

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(0);

	w = width / 2
	h = height / 2

	sec = second();
	min = minute();
	hr = hour();

	noStroke();
	textSize(24);
	fill(0, 102, 153);
	text(hr + ":" + min + ":" + sec, mouseX, mouseY);

	noFill();
	strokeWeight(6);

	let jumpSec = map(sec, 0, 60, 0, TWO_PI);
	let jumpMin = map(min, 0, 60, 0, TWO_PI);
	let jumpHr = map(hr % 12, 0, 12, 0, TWO_PI);

	translate(w, h)
	rotate(-0.5 * PI);

	stroke("#F8333C")
	arc(0, 0, 300, 300, 0, jumpSec);

	stroke("#FCAB10")
	arc(0, 0, 280, 280, 0, jumpMin);

	stroke("#44AF69")
	arc(0, 0, 260, 260, 0, jumpHr);

	push();
	stroke("#F8333C")
	strokeWeight(4)
	rotate(jumpSec)
	line(0, 0, 100, 0)
	pop();

	push();
	stroke("#FCAB10")
	strokeWeight(4)
	rotate(jumpMin)
	line(0, 0, 80, 0)
	pop();

	push();
	stroke("#44AF69")
	strokeWeight(4)
	rotate(jumpHr)
	line(0, 0, 60, 0)
	pop();

	stroke(255)
	point(0, 0)
}