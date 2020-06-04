import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecandComponent } from './updatecand.component';

describe('UpdatecandComponent', () => {
  let component: UpdatecandComponent;
  let fixture: ComponentFixture<UpdatecandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdatecandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatecandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
