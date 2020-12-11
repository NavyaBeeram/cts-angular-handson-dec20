import { Component, OnInit } from '@angular/core';
import { Hello } from '../hello/hello';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent  {
  name : string = "Navya";
  salary : number = 3500;
  dob : Date =new Date("2020-12-11");
  hello1: Hello = new Hello(55, "Hello Message");
}
