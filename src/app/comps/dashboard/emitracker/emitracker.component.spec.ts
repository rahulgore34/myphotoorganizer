import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmitrackerComponent } from './emitracker.component';

describe('EmitrackerComponent', () => {
  let component: EmitrackerComponent;
  let fixture: ComponentFixture<EmitrackerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmitrackerComponent]
    });
    fixture = TestBed.createComponent(EmitrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
