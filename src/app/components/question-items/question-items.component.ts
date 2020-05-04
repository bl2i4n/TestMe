import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-question-items',
  templateUrl: './question-items.component.html',
  styleUrls: ['./question-items.component.css']
})
export class QuestionItemsComponent implements OnInit {

  constructor() { 
  }

  ngOnInit(): void { 
  }
  
  // onSubmit(form){
  //   console.log("clicked")
  //   this.testValue = form;
  //   console.log(this.testValue);
  //   // console.log(form.controls['Yes'].value)
  //   // console.log(form.controls['Yes']);
  //   // console.log(form.controls['No']);
  //   // console.log(form.controls['idk']);
  //   if (form.controls['Yes'].value === 1) {
  //     console.log("yay found 1")
  //   } else if (form.controls['No'].value === 2) {
  //     console.log("yay found 2")
  //   } else if (form.controls['idk'].value === 2) {
  //     console.log("yay found 2")
  //   } else {
  //     console.log("nothing found")
  //   }
  // }
  userAnswer: Number;
  sum: Number;

  log(x) {
    // console.log(x.value)
    this.userAnswer = x.value
    // this.userAnswer = x.name;
    console.log(this.userAnswer)
    return this.userAnswer;
  }

  handleClick() {
    this.log(this.userAnswer);
    console.log("userAnswer is", this.userAnswer)
  }


}
