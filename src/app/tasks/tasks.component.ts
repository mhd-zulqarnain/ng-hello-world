import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  template:`
  <h3 [class]="normalClass">Enter the name</h3>
  <h3 class="text-normal">Enter the name</h3>
  <input [id]="myId" type="text" value="ali">
  <input [disabled]="isDisabled" type="text" value="ali">
  <h4 [class.text-danger]="isDanger"> danger here</h4>

  <h2 [style.color]="hasError ? 'red':'green'">inline css</h2>
  <h2 [style.color]="specialColor">ts style</h2>

  <h2 [ngStyle]="titleStyle">make style class in component</h2>
  `,
  styles:[
      `.text-normal{
       color:green 
          }
       .text-danger{
         color:red
       }
       .text-special{
         font-style:italic
       }`
  ]
})
export class TasksComponent implements OnInit {

  public myId="myId"
  public isDisabled=false
  public isDanger:boolean = true;
  public hasError:boolean = true;
  public normalClass="text-special"
  public specialColor:string="yellow"

  public titleStyle={
    color:"blue",
    fontSyle:"italic"
  }
  constructor() { }

  ngOnInit() {
  }

}
