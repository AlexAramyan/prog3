class LivingCreature{
    constructor(x, y, isAlive){
        this.x = x;
        this.y = y;
        this.isAlive = isAlive;
        this.directions = [
           [this.x - 1, this.y - 1],
           [this.x, this.y - 1],
           [this.x + 1, this.y - 1],
           [this.x - 1, this.y],
           [this.x + 1, this.y],
           [this.x - 1, this.y + 1],
           [this.x, this.y + 1],
           [this.x + 1, this.y + 1]
       ];
    }
    yntrelVandak(ch) {
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
                if (matrix[y][x] == ch) {
                    found.push(this.directions[i]);
                }
            }   
        }
        return found;
    }
}

class SaintWater extends LivingCreature{
    sharjvel() {
        this.stanalNorKordinatner();
        var vandak = random(this.yntrelVandak(0));
        var vandak1 = random(this.yntrelVandak(3));
        if (vandak || vandak1) {
            if (vandak) {
                matrix[this.y][this.x] = 0;
                this.x = vandak[0];
                this.y = vandak[1];
                matrix[this.y][this.x] = 55;
            }
            else{
                matrix[this.y][this.x] = 0;
                this.x = vandak1[0];
                this.y = vandak1[1];
                matrix[this.y][this.x] = 55;
            } 
        }
    }

    hangtsnel() {
        var norVandak = random(this.yntrelVandak(4));
        if (norVandak) {
            matrix[this.x][this.y] = 0;
            this.x = norVandak[1];
            this.y = norVandak[0];
            matrix[this.x][this.y] = 55;

            for (var i in fireArr) {
                if (norVandak[0] == fireArr[i].x && norVandak[1] == fireArr[i].y) {
                    fireArr.splice(i, 1);
                }
            }
        }

        else {
            this.sharjvel();
        }
    }
    
    bazmanal() {
        var norVandak = random(this.yntrelVandak(0));
        if (norVandak) {
            var newWater = new SaintWater(norVandak[0], norVandak[1]);
            Water.push(newWater);
            matrix[norVandak[1]][norVandak[0]] = 55;
        }
    }
}