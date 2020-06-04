import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewcandComponent } from './viewcand.component';

describe('ViewcandComponent', () => {
  let component: ViewcandComponent;
  let fixture: ComponentFixture<ViewcandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewcandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewcandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
