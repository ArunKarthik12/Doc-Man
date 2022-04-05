import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Docmain1Component } from './docmain1/docmain1.component';
import { Docmain2Component } from './docmain2/docmain2.component';

@NgModule({
  declarations: [
    AppComponent,
    Docmain1Component,
    Docmain2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
