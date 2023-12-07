import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface PostData {
  id?: number;
  fname: string;
  lname: string;
  email: string;
  address:string;
  designation:string;
  gender:string
}
@Injectable({
  providedIn: 'root'
})
export class CurdServises {
  baseUrl="http://localhost:3000/"
  constructor(private httpClient:HttpClient) { }
  post(endPoint:string, body:PostData):Observable<PostData[]>{
    return this.httpClient.post<PostData[]>(`${this.baseUrl}${endPoint}`,body);
  }
  get(endPoint:string):Observable<any>{
    return this.httpClient.get(`${this.baseUrl}${endPoint}`);
  }
  edit(endPoint: string, id: number, body: PostData): Observable<PostData[]> {
    return this.httpClient.put<PostData[]>(`${this.baseUrl}${endPoint}/${id}`, body);
  }
  delete(endPoint: string, id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}${endPoint}/${id}`);
  }
}
