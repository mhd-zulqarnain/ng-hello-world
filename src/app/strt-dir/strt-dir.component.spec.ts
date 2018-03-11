import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StrtDirComponent } from './strt-dir.component';

describe('StrtDirComponent', () => {
  let component: StrtDirComponent;
  let fixture: ComponentFixture<StrtDirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StrtDirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StrtDirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
