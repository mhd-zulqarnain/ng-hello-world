import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  // templateUrl: './test.component.html',
  // styleUrls: ['./test.component.css']
  template:`
  <h2>{{name}}</h2>
  <h2>{{"welcome"+name}}</h2>
  <h2>{{greetUser()}}</h2>
  <h2>{{siteUrl}}</h2>
  `
})
export class TestComponent implements OnInit {

  public name="my new app title"
  public siteUrl=window.location.href
  constructor() { }

  ngOnInit() {
  }
  greetUser(){
    return "hello "+this.name
  }

}
