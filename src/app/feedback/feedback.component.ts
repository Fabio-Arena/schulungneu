import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(public bildkarussell:BildkarussellService) { }

  ngOnInit(): void {
  }

}
