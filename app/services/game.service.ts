import {Injectable} from 'angular2/core'
import {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

@Injectable()
export class GameService{
    
    private _http: Http;
    private _cellsUrl = 'http://localhost:8080/api/cells';
    
    constructor(http: Http){
        this._http = http;
    }
    
    public postCells(cellData){
        return this._http.get(this._cellsUrl)
                    .map(res => <boolean[][]>res.json().data)
                    .catch(this.handleError);
                    //.subscribe(cells => this.cells = cells)
                    
                    //.map((tasks: Array<any>) => {
                        // let result:Array<boolean> = [];
                        // if(cells){
                        //     cells.forEach((cell) =>{
                        //         result.push(true);
                        //     });
                        // }
                        // return result;                       
                        
                    //})
                    
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}