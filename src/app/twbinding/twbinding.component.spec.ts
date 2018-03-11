import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwbindingComponent } from './twbinding.component';

describe('TwbindingComponent', () => {
  let component: TwbindingComponent;
  let fixture: ComponentFixture<TwbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
