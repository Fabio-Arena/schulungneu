import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';


@Component({
  selector: 'app-bild',
  templateUrl: './bild.component.html',
  styleUrls: ['./bild.component.css']
})
export class BildComponent implements OnInit {

  constructor(public bildkarussell : BildkarussellService) { }
  getBild = () => this. bildkarussell?.getBild()
  ngOnInit(): void {
    
  }
  
}
