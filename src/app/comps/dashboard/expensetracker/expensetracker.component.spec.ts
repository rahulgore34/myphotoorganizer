import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpensetrackerComponent } from './expensetracker.component';

describe('ExpensetrackerComponent', () => {
  let component: ExpensetrackerComponent;
  let fixture: ComponentFixture<ExpensetrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpensetrackerComponent]
    });
    fixture = TestBed.createComponent(ExpensetrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
