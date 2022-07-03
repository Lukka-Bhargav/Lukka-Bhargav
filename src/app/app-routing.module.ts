import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';
import { Sample3Component } from './sample3/sample3.component';

const routes: Routes = [
{ path : 'sample', component : SampleComponent },
{ path : 'sample2', component : Sample2Component },
{ path : 'sample3', component : Sample3Component },
{ path : 'home', loadChildren : () => import ( './home/home.module' ).then(m => m.HomeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
