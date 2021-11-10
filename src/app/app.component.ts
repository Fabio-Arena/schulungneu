import { Component } from '@angular/core';
import { BildkarussellService } from './bildkarussell.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public bildservice:BildkarussellService){}
  
  clickButton(){
    this.bildservice.changeImage();
  }
}
