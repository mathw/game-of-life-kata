class Game {
    
    constructor(private neighbourCounter: counters.INeighbourCounter) {}   
    
    public startGame() {
        let inputElements: HTMLInputElement[][] = this.getCellInputElements();
    
        let neighbourCountGrid = this.neighbourCounter.countNeighbours(inputElements);

        for(let row = 0; row < enums.CELL_COUNT_X; row++) {
            for(let col = 0; col < enums.CELL_COUNT_Y; col++) {
                let neighbourCount = neighbourCountGrid[row][col];            
                let cell = inputElements[row][col];
                cell.checked = this.checkForUnderpopulation(neighbourCount, cell);
                cell.checked = this.checkForOvercrowding(neighbourCount, cell);
                cell.checked = this.checkForMating(neighbourCount, cell);
            }
        }
    }

    private getCellInputElements(): HTMLInputElement[][] {
        let inputElements: HTMLInputElement[][] = [];
        for(let row = 0; row<enums.CELL_COUNT_X; row++) {
            inputElements.push(new Array<HTMLInputElement>());
            for(let col = 0; col<enums.CELL_COUNT_Y; col++) {
                inputElements[row][col] = <HTMLInputElement>document.getElementById(row + '_' + col);
            }
        } 
        
        return inputElements;
    }        

    private checkForUnderpopulation(neighbourCount, existingCell) {
        return (neighbourCount < 2) ? enums.DEAD_CELL : existingCell.checked;
    }
        
    private checkForOvercrowding(neighbourCount, existingCell){
        return (neighbourCount > 3) ? enums.DEAD_CELL : existingCell.checked;
    }
    
    private checkForMating(neighbourCount, existingCell){
        return (neighbourCount == 3) ? enums.LIVE_CELL : existingCell.checked;
    }
}

