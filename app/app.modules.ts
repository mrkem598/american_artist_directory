
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './component.app';
// create ng module decorator(function that modifies js classes)
@NgModule({
  // import modules that we are going to need like our features of applicatons//
  imports: [
    BrowserModule
  ],
  // declarations allow us to import modules that we have in our application
  declarations: [
    AppComponent
  ],

  //bootstrap//
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
