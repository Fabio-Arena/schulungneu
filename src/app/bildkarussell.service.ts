import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BildkarussellService {

  liste: string[] = ["https://cdn.pixabay.com/photo/2021/10/13/15/39/kids-6706964_960_720.jpg"];
  bildpfad: string = this.liste[0];
  counter = 0;

  constructor() { }
  changeImage(){
    if(this.counter < this.liste.length-1){
      this.counter++;
            
    }else{
      this.counter = 0;
      
    }
    this.bildpfad = this.liste[this.counter];

  }
  

  addUrl(event:Event){
    const url = (<HTMLInputElement>event.target).value;
    if(url.endsWith(".jpg")){
      this.liste.push(url);
    }else{
      console.log("Bitte gültige Url angeben")
    }
  }
}
