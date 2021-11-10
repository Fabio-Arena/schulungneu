import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'any'
})
export class BildkarussellService {

  liste: string[] = ["https://cdn.pixabay.com/photo/2021/10/13/15/39/kids-6706964_960_720.jpg"];
  bildpfad: string = this.liste[0];
  current_image = 0;
  index = 0;
  
  constructor() { }
  changeImage(){
    if(this.current_image < this.liste.length-1){
      this.current_image++;
            
    }else{
      this.current_image = 0;
      
    }
    this.bildpfad = this.liste[this.current_image];

  }
  

  addUrl(event:Event){
    const url = (<HTMLInputElement>event.target).value;
    if(url.endsWith(".jpg")){
      this.liste.push(url);
      this.index++;
      console.log(this.index);
    }else{
      //Fehlermeldung
    }

  }

  deleteRow(index:number){
    this.liste.splice(index, 1);
  }
}
