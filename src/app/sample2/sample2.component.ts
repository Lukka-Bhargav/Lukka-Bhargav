import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  [x: string]: any;
  enterYourName = "enterYourName";
  secondSample ="secondSample";
  sampleThree ='sample3';
  @Output() costomEve = new EventEmitter();
  constructor() { 
    this.enterYourName = "Bhargv"
    console.log('this output comes from sample2 constructor',this.enterYourName);
  }

  ngOnInit(): void {
    console.log('this output comes from sample2 ngOnInit',this.secondSample);
  
  }

  fromsample3comp(){
    console.log('this output come from sample3');
    this.costomEve.emit(this.sampleThree);
  }

}