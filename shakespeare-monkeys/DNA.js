class DNA {
	constructor(target) {
		this.target = target;
		this.fitness = 0
		this.genes = generate(this.target);
	}

	evalFitness() {
		let matchCount = 0
		for (let i = 0; i < this.genes.length; ++i) {
			if (this.genes[i] == this.target.charAt(i)) {
				matchCount += 1
			}
		}
		this.fitness = matchCount / this.target.length
	}

	crossover(partner) {
		let child = new DNA(this.target)
		let threshold = floor(random(this.genes.length))
		for (let i = 0; i < this.genes.length; ++i) {
			if (i < threshold) {
				child.genes[i] = this.genes[i]
			}
			else {
				child.genes[i] = partner.genes[i]
			}
		}
		return child
	}

	mutate(mutationRate) {
		for (let i = 0; i < this.genes.length; ++i) {
			if (mutationRate > random(1)) {
				this.genes[i] = getChar()
			}
		}
	}
}

function getChar() {
	let char = floor(random(62, 91))

	if (char == 62) {
		char = 32
	}
	if (char == 63) {
		char = 46
	}
	if (char == 64) {
		char = 39
	}

	return String.fromCharCode(char);
}

function generate(target) {
	let ar = []
	for (let i = 0; i < target.length; ++i) {
		ar[i] = getChar();
	}
	return ar;
}