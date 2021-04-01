import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private _http:HttpClient) { }


  table1Data(){
   return this._http
  }
  table2Data(){

  }
  table3Data(){

  }
}



