var matrix = [];

var side = 15;

var grassArr = [];
var eaterArr = [];
var aidArr = [];
var fireArr = [];
var Water = [];

function setup() {
    frameRate(1000);    
    
    for (var i = 0; i < 36; i++) {
        
        matrix[i] = [];
        
        for (var j = 0; j < 36; j++) {
            var k = Math.floor(Math.random() * 40)

            if (k == 1 || k == 5 || k == 6) {
                matrix[i][j] = 1;
            }
            
            else if (k == 2) {
                matrix[i][j] = 2;
            }
            
            else if (k == 3) {
                matrix[i][j] = 3;
            }
            
            // else if (k == 4) {
            //     matrix[i][j] = 4;
            // }
            
            else {    
                matrix[i][j] = 0;
            }
        }
    }
    /*matrix = [[0, 0, 1, 0, 0],
    [1, 0, 2, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 1, 4, 0],
    [1, 1, 0, 0, 3]
    ];*/
    //matrix[0][0] = 1;
    console.log(matrix);
    
    matrix[matrix.length / 2][matrix.length / 2] = 4;
    matrix[0][matrix.length - 1] = 55;

    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    noStroke();
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                var eat = new Xotaker(x, y);
                eaterArr.push(eat);
            }
            else if (matrix[y][x] == 3) {
                var chuma = new AID(x, y);
                aidArr.push(chuma);
            }
            else if (matrix[y][x] == 4) {
                var fire = new Fire(x, y);
                fireArr.push(fire);
            }
            else if (matrix[y][x] == 55){
                var fireF = new SaintWater(x, y);
                Water.push(fireF);
            }
        }
    }
}
function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("#42f448");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 0) {
                fill(35);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("#000");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("#ce2029");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 55) {
                fill("#00f");
                rect(x * side, y * side, side, side);
            }
        }
    }
    for (var i in grassArr) {
        grassArr[i].bazmanal();
    }
    for (var j in eaterArr) {
        eaterArr[j].utel();
        eaterArr[j].bazmanal();
        eaterArr[j].mahanal();
    }
    for (var l in aidArr) {
        aidArr[l].utel();
        aidArr[l].bazmanal();
    }
    for (var f in fireArr) {
        fireArr[f].utel();
        fireArr[f].bazmanal();
    }
    for (var w in Water){
        Water[w].hangtsnel();
        Water[w].bazmanal();
    }
}