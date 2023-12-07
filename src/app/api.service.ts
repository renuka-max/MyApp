import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PostData {
  name: string;
  age: number;
  email: string;
}
@Injectable({
  providedIn: 'root'
})
export class APIService {
  baseUrl="http://localhost:3000/"
  constructor(private httpClient:HttpClient) { }
  post(endPoint:string, body:PostData):Observable<PostData[]>{
    return this.httpClient.post<PostData[]>(`${this.baseUrl}${endPoint}`,body);
  }
  get(endPoint:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}${endPoint}`);
  }
}
