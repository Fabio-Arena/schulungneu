import { Component, OnInit } from '@angular/core';
import { BildkarussellService } from '../bildkarussell.service';

@Component({
  selector: 'app-feedbackfailed',
  templateUrl: './feedbackfailed.component.html',
  styleUrls: ['./feedbackfailed.component.css']
})
export class FeedbackfailedComponent implements OnInit {

  constructor(public bildkarussell:BildkarussellService) { }

  ngOnInit(): void {
  }

}
