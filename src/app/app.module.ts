import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';
import { CustomDirective } from './custom.directive';
import { FileSizeConvertionPipe } from './file-size-convertion.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SampleComponent,
    Sample2Component,
    Sample3Component,
    CustomDirective,
    FileSizeConvertionPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
