import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelreadComponent } from './excelread.component';

describe('ExcelreadComponent', () => {
  let component: ExcelreadComponent;
  let fixture: ComponentFixture<ExcelreadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExcelreadComponent]
    });
    fixture = TestBed.createComponent(ExcelreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
