import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twbinding',
  template:`
  <input [(ngModel)]="name" type="">{{name}}
  `,
  styles:[]
})
export class TwbindingComponent implements OnInit {

  public name:string="My App"
  constructor() { }

  ngOnInit() {
  }


}
