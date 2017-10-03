
namespace counters {

    export interface INeighbourCounter {
        countNeighbours(cells: HTMLInputElement[][]): number[][];
    }

    export class NeighbourCounter implements INeighbourCounter {                
        public countNeighbours(cells: HTMLInputElement[][]): number[][] {
            let cellCounts: number[][] = [];
            
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

        private hasLiveCell(row: number, col: number, cells: HTMLInputElement[][]): boolean {
            if(!cells[row]) return enums.DEAD_CELL;
            if(!cells[row][col]) return enums.DEAD_CELL;
            if(cells[row][col].checked != enums.LIVE_CELL) return enums.DEAD_CELL;
            
            return enums.LIVE_CELL;
        }
    }
}