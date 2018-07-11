let population;
let selection;
let mutationRate = 0.01
let generation = 0;
let generationText;
let targetText;
let avgText;
let count = 200;
let img;
let input;
let btn;
let called = false;

function preload() {
	img = loadImage("will.jpg")
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	input = createInput("Enter something...")
	input.position(200, 40)

	btn = createButton("Go")
	btn.position(380, 40)
	btn.mousePressed(callMonkeys);
}

function goMonkey(value) {
	let target = value;
	target = target.toUpperCase();
	targetText = createP(target);
	targetText.position(200, 50);
	selection = createP("Most Fit:");
	selection.position(200, 200);
	generationText = createP("Generation: ");
	generationText.position(200, 100);
	avgText = createP("Average Fitness: ");
	avgText.position(200, 150);
	population = new Population(target, mutationRate, count);
}

function draw() {
	image(img, 600, 50, (img.width) / 2, (img.height) / 2)
	if (called == true) {
		generation += 1
		generationText.html("Generation: <br>" + generation);
		population.evalFitness();
		population.buildPool();
		avgText.html("Average Fitness: <br>" + population.averageFitness().toFixed(2));
		selection.html("Most Fit: <br>" + population.getBest().genes.join(''));
		population.evaluate();
		population.generate();
		if (population.done) {
			noLoop()
		}
	}

}

function callMonkeys() {
	called = true
	goMonkey(input.value());
}
