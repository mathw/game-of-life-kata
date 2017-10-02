var CELL_COUNT_X = 3;
var CELL_COUNT_Y = 3;

class Game {
    neighbourCounter: counters.INeighbourCounter;

    constructor() {
        this.neighbourCounter = new counters.NeighbourCounter();
    }   
    
    public startGame() {
            var cells: Array<Array<HTMLInputElement>> = [];
            for(var row = 0; row < CELL_COUNT_X; row++) {
                for(var col = 0; col < CELL_COUNT_Y; col++) {
                    cells[row][col] = <HTMLInputElement>document.getElementById(row + '_' + col);      
                }
            }
        
            var neighbourCountGrid = this.neighbourCounter.countNeighbours(cells);

            for(var row = 0; row < CELL_COUNT_X; row++) {
                for(var col = 0; col < CELL_COUNT_Y; col++) {
                    var neighbourCount = neighbourCountGrid[row][col];            
                    var cell = cells[row][col];
                    cell.checked = this.checkForUnderpopulation(neighbourCount, cell);
                    cell.checked = this.checkForOvercrowding(neighbourCount, cell);
                    cell.checked = this.checkForMating(neighbourCount, cell);
                }
            }
        }

    private checkForUnderpopulation(neighbourCount, existingCell) {
        if(neighbourCount < 2){
            return false;
        }    
        return existingCell.checked;
    }
    
    private checkForOvercrowding(neighbourCount, existingCell){
        if(neighbourCount > 3){
            return false;
        }    
        return existingCell.checked;
    }
    
    private checkForMating(neighbourCount, existingCell){
        if(neighbourCount == 3){
            return true;
        }
        return existingCell.checked;
    }
}

