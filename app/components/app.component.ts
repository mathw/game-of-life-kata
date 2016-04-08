import {Component} from 'angular2/core'
import {GameService} from '../services/game.service'

@Component({
    selector: 'game-app',
    templateUrl: 'app/templates/game.html',
    providers:[GameService]
})

export class AppComponent{
    
    private _gameService: GameService;
    public CellData:boolean[][]; 
    public ErrorMessage: string;
    public CellsX = 4;
    public CellsY = 4;
    
    constructor(gameService:GameService){
        this._gameService = gameService;
        this.RefreshCells();      
    }
    
    public PostCells(event){
            
        this._gameService.postCells(this.CellData)
            .subscribe(cellData => this.CellData = cellData, error => this.ErrorMessage);
            
        
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