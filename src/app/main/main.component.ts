import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import { MMyPipe } from '../m-my.pipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  // case conversion
  mainWord:string='rrr' 

  updateMainWord(): void {
    const userInput = prompt('Enter a word:'); // Prompt for user input
    if (userInput !== null) {
      this.mainWord = userInput;
    }
  }

  // date=new Date()
  
  // Change currency based on dropdown
  // price:number=4444
  // selectedCurrency:string='INR'
  // updatePrice(){

  // }

  // Global search filter
searchText:string=""
// filteredData:any=[]

  data=[
    {id:123,product:'phone',price:20000},
    {id:124,product:'laptop',price:50000},
    {id:125,product:'washing machine',price:30000},
    {id:126,product:'oven',price:18000},
    {id:127,product:'fridge',price:62000},
    {id:128,product:'air condition',price:36000},
    {id:129,product:'filter',price:5000},
    {id:130,product:'cooler',price:8000},
  ]
  
  // constructor(){
  //   this.filteredData=this.data
  // }

  // updateFilteredData() {
  //   this.filteredData = this.data.filter(
  //     (item) =>
  //       item.product.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
  //       item.price.toString().includes(this.searchTerm) ||
  //       item.id.toString().includes(this.searchTerm)
  //   );
  // }

}
