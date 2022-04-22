import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl = "http://127.0.0.1:8000/";
  constructor(private http:HttpClient) { }

  getMovieList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/movie/');
  }

  addMovie(val:any){
    return this.http.post(this.APIUrl + '/movie/',val);
  }

  getActorList():Observable<any[]>{
    return this.http.get<any[]>(this.APIUrl + '/actor/');
  }

  addActor(val:any){
    return this.http.post(this.APIUrl + '/actor/',val);
  }

}
