import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoantrackerComponent } from './loantracker.component';

describe('LoantrackerComponent', () => {
  let component: LoantrackerComponent;
  let fixture: ComponentFixture<LoantrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoantrackerComponent]
    });
    fixture = TestBed.createComponent(LoantrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
