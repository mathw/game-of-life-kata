var neighbourCounter = require('./neighbourCounter');

var test = 
        [
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','*','.','.'],
            ['.','.','.','.'],
            ['.','.','.','.'],
            ['.','.','.','.']
        ]

var cellCounts = neighbourCounter.countNeighbours(test);

console.log(cellCounts);


module.exports = {
    run: function(cells){
        
        
        return [
            [".",".",".","."],
            [".",".",".","."],
            [".","*","*","."],
            [".","*","*","."],
            [".",".",".","."],
            [".",".",".","."]
        ]
    }
}