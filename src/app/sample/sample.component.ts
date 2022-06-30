import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

@Input('myName') name : any;
  constructor() {
    console.log('this output comes from constructor sample',);
   }

  ngOnInit(): void {
    console.log('this output comes from ngOnInt sample',this.name);
  }
}