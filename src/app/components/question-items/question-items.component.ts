import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-items',
  templateUrl: './question-items.component.html',
  styleUrls: ['./question-items.component.css']
})
export class QuestionItemsComponent implements OnInit {

  handleClick(event: Event) {
    // console.log(selection);
    console.log('clicked')
  }

  constructor() { }

  ngOnInit(): void {
  }
}
