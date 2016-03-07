var constants = require('./constants')

module.exports = {
    countNeighbours: function(cells){
        
        var cellCounts = [];
        
        for(var row = 0; row < cells.length; row++){
            cellCounts.push([]);
            
            for(var col = 0; col < cells[row].length; col++){
                cellCounts[row].push('');
                
                var count = 0;
                if(hasLiveCell(row - 1, col - 1, cells)) count++;                         
                if(hasLiveCell(row, col - 1, cells)) count++; 
                if(hasLiveCell(row + 1, col - 1, cells)) count++; 
                if(hasLiveCell(row - 1, col, cells)) count++; 
                if(hasLiveCell(row + 1, col, cells)) count++; 
                if(hasLiveCell(row - 1, col + 1, cells)) count++; 
                if(hasLiveCell(row, col + 1, cells)) count++; 
                if(hasLiveCell(row + 1, col + 1, cells)) count++; 
                                
                cellCounts[row][col] = count;
            }
        }
        return cellCounts;
    }
}

function hasLiveCell(row, col, cells){
    if(!cells[row]) return false;
    if(!cells[row][col]) return false;
    if(cells[row][col] != constants.LIVE_CELL) return false;
    
    return true;
}