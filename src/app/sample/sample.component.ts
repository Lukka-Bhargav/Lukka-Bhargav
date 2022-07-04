import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  title = 'Sample!';
  status :any;
  playersInfo :any;
@Input('youCanChangeIfYouWant') name : any;
  constructor() {
    this.status = true;
    this.playersInfo =[
      {
      player : 1,
      name : 'kohli',
      age : 35,
      gender : 'MALE',
      runs : 9000,
    },
    {
      player : 2,
      name : 'dhoni',
      age : 38,
      gender : 'MALE',
      runs : 7000,
    },
    {
      player : 3,
      name : 'sachin',
      age : 45,
      gender : 'MALE',
      runs : 10000,
    },
    {
      player : 4,
      name : 'ganguli',
      age : 45,
      gender : 'MALE',
      runs : 9500,
    }
  ]


    console.log('this output comes from constructor sample',);
   }

  ngOnInit(): void {
    console.log('this output comes from ngOnInt sample',this.name);
  }
}