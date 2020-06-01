import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatetabComponent } from './candidatetab.component';

describe('CandidatetabComponent', () => {
  let component: CandidatetabComponent;
  let fixture: ComponentFixture<CandidatetabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatetabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatetabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
