import {HttpClient, json} from 'aurelia-fetch-client';
import {inject} from 'aurelia-framework';

@inject(HttpClient)
export class CellsService{
       
    constructor(private _http: HttpClient){
        _http.configure(config => {
           config
            .useStandardConfiguration()
            .withBaseUrl('http://localhost:8080/api/')
            .withDefaults({
                headers:{
                    'Content-Type':'application/json'
                }
            }); 
        });
    }
    
    public postCells(cellData){     
        
        return this._http.fetch('cells/',
            {
                method: 'POST',
                body: json(cellData)
            })
            .then(response => response.json())
            .catch(this.handleError);               
    }
    
    private handleError(error: Response){
        console.error(error);
    }
}