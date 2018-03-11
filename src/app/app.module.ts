import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { TasksComponent } from './tasks/tasks.component';
import { BindingsComponent } from './bindings/bindings.component';
import { EventsComponent } from './events/events.component';
import { TwbindingComponent } from './twbinding/twbinding.component';
import { StrtDirComponent } from './strt-dir/strt-dir.component';


@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    TasksComponent,
    BindingsComponent,
    EventsComponent,
    TwbindingComponent,
    StrtDirComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
