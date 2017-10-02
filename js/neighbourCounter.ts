
namespace counters {

export interface INeighbourCounter {
    countNeighbours(cells: Array<Array<HTMLInputElement>>);
}

export class NeighbourCounter implements INeighbourCounter {
    
    constructor() {}

    public countNeighbours(cells: Array<Array<HTMLInputElement>>) {
        let cellCounts: Array<Array<number>> = [];
        
        for(let row = 0; row < cells.length; row++) {
            cellCounts.push([]);
            
            for(let col = 0; col < cells[row].length; col++) {                

                let count: number = 0;
                if(this.hasLiveCell(row - 1, col - 1, cells)) count++;                         
                if(this.hasLiveCell(row, col - 1, cells)) count++; 
                if(this.hasLiveCell(row + 1, col - 1, cells)) count++; 
                if(this.hasLiveCell(row - 1, col, cells)) count++; 
                if(this.hasLiveCell(row + 1, col, cells)) count++; 
                if(this.hasLiveCell(row - 1, col + 1, cells)) count++; 
                if(this.hasLiveCell(row, col + 1, cells)) count++; 
                if(this.hasLiveCell(row + 1, col + 1, cells)) count++; 
                                
                cellCounts[row][col] = count;
            }
        }

        return cellCounts;
    }

    private hasLiveCell(row, col, cells) {
        if(!cells[row]) return false;
        if(!cells[row][col]) return false;
        if(cells[row][col].checked != true) return false;
        
        return true;
    }
}
}