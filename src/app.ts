import {CellsService} from './CellsService';
import {inject} from 'aurelia-framework';

@inject(CellsService)
export class App {
       
    public CellData:boolean[][]; 
    public ErrorMessage: string;
    public CellsX = 4;
    public CellsY = 4;
    
    constructor(private _cellsService:CellsService){
        this.RefreshCells();      
    }
    
    public PostCells(event){                     
        this._cellsService.postCells(this.CellData)
            .then(cellData => {
                    this.CellData = cellData;
                }, error => this.ErrorMessage);        
    }
    
    public RefreshCells(){
        this.CellData = [];
        
        for(var y = 0; y < this.CellsY; y++){
            this.CellData.push([]);
            for(var x = 0; x < this.CellsX; x++){
                this.CellData[y].push(false);
            }
        }
    }
}