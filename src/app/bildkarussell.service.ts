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
  status = "";
  private timerHandleOn = 0;
  private timerHandleOff = 0;
  getListe = () => this.liste;
  getBild = () => this.liste[this.current_image];
  getStatus = () => this.status

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
    if(url.endsWith(".jpg") || url.endsWith(".png") || url.endsWith(".gif")){
      this.liste.push(url);
      this.index++;
      this.speichern();
      this.setStatus("success")
      console.log(this.index);

    }else{
      this.setStatus("failed")
    }

  }

  deleteRow(index:number){
    this.liste.splice(index, 1);
    this.speichern();
  }

  private setStatus(status: string) {
    this.status = ""
    clearTimeout(this.timerHandleOn)
    clearTimeout(this.timerHandleOff)
    this.timerHandleOn = setTimeout(() => this.status = status, 500)
    this.timerHandleOff = setTimeout(() => this.status = "", 2000)
  }
}
