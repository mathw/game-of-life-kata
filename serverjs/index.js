var game = require("./game");

var input = [
    ['.','.','.','.'],
    ['.','.','.','.'],
    ['.','.','*','.'],
    ['.','*','*','.'],
    ['.','.','.','.'],
    ['.','.','.','.']
];

var output = game.run(input);

console.log(output);