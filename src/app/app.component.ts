import { Component, OnInit } from '@angular/core';
import { APIService, PostData } from './api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'API';
  // givenStr="rrr";
  data:PostData[]|undefined
  
  constructor(private test: APIService) {}
  postData():void {
    
    const endpoint = 'body'; 
    const postData:PostData = { name: 'John Doe',
    age: 25,
    email: 'john.doe@example.com' }; 
    this.test.post(endpoint, postData).subscribe(
      // (response) => {
      //   this.data=response
      //   console.log('Response:', this.data);
      // },
      // (error) => {
      //   console.error('Error:', error);
      // }
    );
  }

  getData():void{
    const endpoint='body';
    this.test.get(endpoint).subscribe((res)=>{
      this.data=res;
      console.log("GET Response",this.data);
      })
  }
  

 
}