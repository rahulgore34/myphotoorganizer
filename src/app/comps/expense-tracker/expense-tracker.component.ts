import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.scss']
})
export class ExpenseTrackerComponent implements OnInit {
  saveExpanseData: any;
  selected:any = 'selectedOption'
  constructor(private fb: FormBuilder) { }
  ngOnInit(): void {
    this.patchValue()
  }
  ExpenseTracker: FormGroup = this.fb.group({
    expenseDate: "",
    expenseTittle: "",
    expenseAmount: "",
    expensePaymentMode: ""
  })
  editExpenseData(): void {
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.classList.add('show');
      modalElement.style.display = 'block';
    }
  }

  closeModal(): void {
    const modalElement = document.getElementById('editModal');
    if (modalElement) {
      modalElement.classList.remove('show');
      modalElement.style.display = 'none';
    }
  }
  patchValue() {
    this.ExpenseTracker.patchValue({
      expenseDate: this.saveExpanseData.expenseDate,
      expenseTittle: this.saveExpanseData.expenseTittle,
      expenseAmount: this.saveExpanseData.expenseAmount,
      expensePaymentMode: this.saveExpanseData.expensePaymentMode
    })
  }
  saveExpenseData() {
    console.log(this.ExpenseTracker.value)
    this.saveExpanseData = this.ExpenseTracker.value
    this.ExpenseTracker.reset()
  }
}
