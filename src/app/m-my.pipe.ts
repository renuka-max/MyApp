import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'case'
})
export class MMyPipe implements PipeTransform {

  // transform(word:string){
  //   if(word===word.toUpperCase()){
  //     return word.toLowerCase()
  //   }
  //   else if(word===word.toLowerCase()){
  //     return word.toUpperCase()
  //   }
  //   else{
  //     return word
  //   }
  // }

  transform(items:any[],searchText:string):any[] {
    if(!items || !searchText){
      return items
    }

    searchText=searchText.toLowerCase()

    const filteredData= items.filter((item)=>
      // console.log(item.id, item.product, item.price); 
      item.id.toString().includes(searchText) ||
      item.product.toLowerCase().includes(searchText) ||
      item.price.toString().includes(searchText)
    )
    return filteredData
  }
  
}
