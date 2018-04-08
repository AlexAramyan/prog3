class Grass extends LivingCreature{
    constructor(x,y,isAlive){
        super();
        this.multiply = 0;
        this.speed = 8;
    }
    bazmanal() {
        this.multiply++;
        var norVandak = random(this.yntrelVandak(0));
        // console.log(norVandak, this.multiply);
        if (this.multiply >= this.speed && norVandak) {
            var norXot = new Grass(norVandak[0], norVandak[1]);
            grassArr.push(norXot);
            matrix[norVandak[1]][norVandak[0]] = 1;
            this.multiply = 0;
        }
    }
}