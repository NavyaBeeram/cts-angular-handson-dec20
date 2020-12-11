import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-items',
  templateUrl: './user-items.component.html',
  styleUrls: ['./user-items.component.css']
})
export class UserItemsComponent {
  message : string = "Successfully stored";
  isValid : boolean = true;

  
  
  employees : any =[
    {"id":101, "name":"navya","salary" : 30000,"address" :{"state":"AP","city":"TDP"}},
    {"id":102, "name":"Samyu","salary" : 20000,"address" :"undefined"},
    {"id":103, "name":"Thanvi","salary" : 35000,"address" :"undefined"},
    {"id":104, "name":"Vahitha","salary" : 40000,"address" :{"state":"TS","city":"HYD"}},
  ]
}
