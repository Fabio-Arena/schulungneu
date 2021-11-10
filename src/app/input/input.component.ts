import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  constructor(public bildkarussell : BildkarussellService) { }

  ngOnInit(): void {
  }

  addUrl(event:Event){
    this.bildkarussell.addUrl(event);

  }

}
