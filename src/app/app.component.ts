import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNewProject';
  wish = 'hi';
  text = '';
  name = 'Enter Your Name';
  test = '';
  inputValue: any;
  date='07-04-2022';
  @ViewChild('sample2com') fromsample2:any;


  constructor(public router : Router){};

  wellCome(name: string) {
    console.log('wellCome to my project', name);
    this.name = '';
    this.wish = '';
    this.text = '';
    this.test = '';
  }
  clear() {
    console.log('clear');
    this.name = '';
    this.wish = '';
    this.text = '';
    this.test = '';
  }


  login() {
    console.log('start project');
  }


  join() {
    console.log('join');
  }

  keyUp() {
    console.log('this output comes form keyUp');
  }
  keyDown() {
    console.log('this output comes from keyDown');
  }
  modelChange() {
    console.log('this output comes form ng model change');
  }
  
  fromsample2comp() {
    console.log('customEve from sample2');
    debugger;
    console.log('this output comes from @ViewChild(sample2com)',this.fromsample2comp);
  }

  fromsample3comp(){
    console.log('this output comes frome samplie3');
    this.router.navigate(['/sample3'])
  }

  goToSample(){
    console.log('this out put comes from sample')
    this.router.navigate(['/sample'])
  }

  goToSample2(){
    console.log('this out put comes from sample2')
    this.router.navigate(['/sample2'])
  }

}
