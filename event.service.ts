import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()

export class EventService {
  private _eventsURL = "http://localhost:4000/api/events";
  // private _specailURL = "http://localhost:4000/api/special";
  constructor(private http:HttpClient) { }
  getEvents(){
    return this.http.get<any>(this._eventsURL)
  };
  // getSpecial(){
  //   return this.http.get<any>(this._specailURL)
  // }
}
