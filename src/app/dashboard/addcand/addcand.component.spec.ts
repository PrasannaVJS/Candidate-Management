import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcandComponent } from './addcand.component';

describe('AddcandComponent', () => {
  let component: AddcandComponent;
  let fixture: ComponentFixture<AddcandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
