import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(public bildkarussell:BildkarussellService) { 
    
  }

  liste: Array<string> = this.bildkarussell.liste;
  
  
  ngOnInit(): void {
  }
  getListe = () => this.bildkarussell?.getListe();

  deleteRow(index:number){
    this.bildkarussell.deleteRow(index);
  }

}
