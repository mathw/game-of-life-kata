import {Component} from 'angular2/core'
import {CellsService} from '../services/cells.service'

@Component({
    selector: 'game-app',
    templateUrl: 'app/components/game.html',
    providers:[CellsService]
})

export class GameComponent{
    
    private _cellsService: CellsService;
    public CellData:boolean[][]; 
    public ErrorMessage: string;
    public CellsX = 4;
    public CellsY = 4;
    
    constructor(cellsService:CellsService){
        this._cellsService = cellsService;
        this.RefreshCells();      
    }
    
    public PostCells(event){
            
        this._cellsService.postCells(this.CellData)
            .subscribe(cellData => {
                    this.CellData = cellData;
                }, error => this.ErrorMessage);        
    }
    
    public RefreshCells(){
        this.CellData = [];
        
        for(var x = 0; x < this.CellsX; x++){
            this.CellData.push([]);
            for(var y = 0; y < this.CellsY; y++){
                this.CellData[x].push(false);
            }
        }
    }
    
    public CustomTrackBy(index: number, obj: any): any {
        return index;
    }
}