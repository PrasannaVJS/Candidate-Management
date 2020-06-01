import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OthertabsComponent } from './othertabs.component';

describe('OthertabsComponent', () => {
  let component: OthertabsComponent;
  let fixture: ComponentFixture<OthertabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OthertabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OthertabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
