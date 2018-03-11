import {Component, OnInit} from '@angular/core';
/*
* remove the block of html code conditionally
* */
@Component({
    selector: 'app-strt-dir',
    template: `
   <div *ngIf="displayName;then thanBlock;else elseBlock"></div>

   <ng-template #thanBlock>
     <h2>
       if Block
     </h2>
   </ng-template>
   
   <ng-template #elseBlock>
     <h2>
        else block executed
     </h2>
   </ng-template>
   
   <div [ngSwitch]="color">
     <h2 *ngSwitchCase="'red'">the selected color is red</h2>
     <h2 *ngSwitchCase="'green'">the seleced color is green</h2>
     <h2 *ngSwitchCase = "'gray'">the selected color is gray</h2>
   </div>
  `,
    styles: []
})
export class StrtDirComponent implements OnInit {

    private displayName:boolean = true;
    private color:string="red"
    constructor() {
    }

    ngOnInit() {
    }

}
