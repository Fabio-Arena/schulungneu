import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
@Injectable({
  providedIn: 'any'
})
export class BildkarussellService {

  liste: Array<string> = [];
  bildpfad: string = this.liste[0];
  current_image = 0;
  index = 0;

  getListe = () => this.liste;
  getBild = () => this.liste[this.current_image];

  constructor(private http: HttpClient) { 
    this.abrufen();
  }

  changeImage(){
    if(this.current_image < this.liste.length-1){
      this.current_image++;
            
    }else{
      this.current_image = 0;
      
    }
    this.bildpfad = this.liste[this.current_image];

  }
  // Holt sich die Datei vom Server und 
  private abrufen() {
    this.http
      .get<any>('http://localhost:8081')
      .subscribe(data => this.liste = data)
  }

  private speichern() {
    this.http
      .post<any>('http://localhost:8081/set', this.liste)
      .subscribe({
        next: data => console.log(data),
        error: error => console.error('Fehler!', error)
      })
  }

  addUrl(event:Event){
    const url = (<HTMLInputElement>event.target).value;
    if(url.endsWith(".jpg") || url.endsWith(".png")){
      this.liste.push(url);
      this.index++;
      this.speichern();
      console.log(this.index);
    }else{
      //Fehlermeldung
    }

  }

  deleteRow(index:number){
    this.liste.splice(index, 1);
    this.speichern();
  }
}
