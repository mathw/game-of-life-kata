import {Injectable} from 'angular2/core';
import {Http, Response, Headers} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CellsService{
    
    private _http: Http;
    private _cellsUrl = 'http://localhost:8080/api/cells';
    
    constructor(http: Http){
        this._http = http;
    }
    
    public postCells(cellData){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this._http.post(this._cellsUrl, JSON.stringify(cellData), {headers: headers})
                    .map(res => res.json())
                    .catch(this.handleError);                    
    }
    
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}