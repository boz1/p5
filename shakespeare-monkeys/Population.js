class Population {
    constructor(target, mutationRate, count) {
        this.pop = [];
        this.target = target;
        this.mutationRate = mutationRate;
        this.count = count
        for (let i = 0; i < this.count; ++i) {
            this.pop[i] = new DNA(this.target);
        }
        this.done = false
    }

    evalFitness() {
        for (let i = 0; i < this.count; ++i) {
            this.pop[i].evalFitness()
        }
    }

    buildPool() {
        this.pool = []
        let maxFitness = 0

        for (let i = 0; i < this.pop.length; ++i) {
            if (maxFitness <= this.pop[i].fitness) {
                maxFitness = this.pop[i].fitness
            }
        }


        for (let i = 0; i < this.pop.length; ++i) {
            let element = this.pop[i]
            let score = map(element.fitness, 0, maxFitness, 0, 1)
            let count = floor(score * 100)
            for (let j = 0; j < count; j++) {
                this.pool.push(element)
            }

        }
    }

    generate() {
        for (let i = 0; i < this.pop.length; ++i) {
            let selectionA = this.pool[floor(random(this.pool.length))]
            let selectionB = this.pool[floor(random(this.pool.length))]
            let child = selectionA.crossover(selectionB)
            child.mutate(this.mutationRate)
            this.pop[i] = child
        }
    }

    getBest() {
        let maxFitness = 0
        let index = 0

        for (let i = 0; i < this.pop.length; ++i) {
            if (maxFitness <= this.pop[i].fitness) {
                maxFitness = this.pop[i].fitness
                index = i
            }
        }
        return this.pop[index]
    }

    evaluate() {
        let best = this.getBest()
        if (best.fitness === 1) {
            this.done = true
        }
    }

    averageFitness() {
        let total = 0;
        for (let i = 0; i < this.pop.length; i++) {
            total += this.pop[i].fitness;
        }
        return total / (this.pop.length);
    }
}
