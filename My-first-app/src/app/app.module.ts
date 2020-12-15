import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ChildCounterComponent } from './child-counter/child-counter.component';
import { ParentCounterComponent } from './parent-counter/parent-counter.component';
import { FormDemoComponent } from './form-demo/form-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildCounterComponent,
    ParentCounterComponent,
    FormDemoComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
