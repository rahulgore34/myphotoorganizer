import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RgtableComponent } from './rgtable.component';

describe('RgtableComponent', () => {
  let component: RgtableComponent;
  let fixture: ComponentFixture<RgtableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RgtableComponent]
    });
    fixture = TestBed.createComponent(RgtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
