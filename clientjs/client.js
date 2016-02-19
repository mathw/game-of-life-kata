var game = require('../serverjs/game.js');

function runGame(){
    var cells = [];
    
    for(var row = 0; row < 4; row++){
        cells.push([])
        for(var col = 0; col < 4; col++){
            cells[row].push([''])
            cells[row][col] = document.getElementById(row + "_" + col).checked ? "*" : ".";
        }
    }               
    
    var output = game.run(cells);
    
    document.getElementById("output").innerHTML = output;
}