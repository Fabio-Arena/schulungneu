import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  constructor(public bildkarussell : BildkarussellService) { }

  ngOnInit(): void {
  }
  clickNext(){
    this.bildkarussell.changeImage();
  }
}
