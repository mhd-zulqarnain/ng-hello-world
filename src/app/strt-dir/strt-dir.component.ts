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
  `,
    styles: []
})
export class StrtDirComponent implements OnInit {

    private displayName:boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

}
