import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  template: `
<button (click)='onClick($event)' >Greetings</button>
<br><br><br>
<button (click)="greeting='Welcome to the website'" >Greetings</button>{{greeting}}

<!--consider #inputvalue as name-->
<input #myInputValue type="text">    
<button (click)='logMessege(myInputValue.value)'>Log</button>
`,
  styles: []
})
export class EventsComponent implements OnInit {
  
  public greeting: string  
  constructor() { }

  public onClick(event) {
    console.log("the item clicked")
    console.log(event)
    this.greeting = event.type
  }
  public logMessege(value) {
    console.log(value)
  }

  ngOnInit() {
  }

}
