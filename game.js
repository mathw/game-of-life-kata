var neighbourCounter = require('./neighbourCounter');
var constants = require('./constants')
      
module.exports = {
    run: function(cells){
             
        var neighbourCountGrid = neighbourCounter.countNeighbours(cells);
             
        for(var row = 0; row < cells.length; row++){
           
            for(var col = 0; col < cells[row].length; col++){
                
                var neighbourCount = neighbourCountGrid[row][col];
                var cell = cells[row][col];
                cell = checkForUnderpopulation(neighbourCount, cell);
                cell = checkForOvercrowding(neighbourCount, cell);
                cell = checkForMating(neighbourCount, cell);
                
                cells[row][col] = cell;
            }
        }
              
        return cells;
    }
}

function checkForUnderpopulation(neighbourCount, existingCell){
    if(neighbourCount < 2){
        return constants.DEAD_CELL;
    }    
    return existingCell;
}

function checkForOvercrowding(neighbourCount, existingCell){
    if(neighbourCount > 3){
        return constants.DEAD_CELL;
    }    
    return existingCell;
}

function checkForMating(neighbourCount, existingCell){
    if(neighbourCount == 3){
        return constants.LIVE_CELL;
    }
    return existingCell;
}