import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { StudentComponent } from './student/student.component';
import { AvgPipe } from './avg.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    PipeDemoComponent,
    StudentComponent,
    AvgPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
