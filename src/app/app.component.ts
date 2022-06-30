import { Component, NgModule, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyNewProject';
  wish = '';
  text = '';
  name = 'HELLO BHARGAV';
  test = '';

  inputValue: any;

  @ViewChild('sample2com') fromsample2:any;

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

}
