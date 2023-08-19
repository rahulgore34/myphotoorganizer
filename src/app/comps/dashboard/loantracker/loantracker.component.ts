import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpdataService } from 'src/app/shared/service/httpdata.service';
import * as XLSX from 'xlsx';
interface ILoanTrackerList {
  loanno: string;
  loanbankname:  string;
  loanbookdate: string;
  loanpurpose: string;
  loanamount : string;
  loantenure: string;
  loanpendingtime: string;
  loanadditionalinfo: string;
  loanemi: string;
}
@Component({
  selector: 'app-loantracker',
  templateUrl: './loantracker.component.html',
  styleUrls: ['./loantracker.component.scss']
})
export class LoantrackerComponent implements OnInit{
 loanTrackerForm!: FormGroup;
 loanTrackerList: ILoanTrackerList[] = [];
 rgTableCols = [
  {header: 'Loan Number', field: 'loanno'},
  {header: 'Loan Bank Name', field: 'loanbankname'},
  {header: 'Loan BookDate', field: 'loanbookdate'},
  {header: 'Loan Purpose', field: 'loanpurpose'},
  {header: 'Loan Amount', field: 'loanamount'},
  {header: 'Loan Tenure', field: 'loantenure'},
  {header: 'Loan EMI', field: 'loanemi'},
  {header: 'Loan Remaining Yrs/months', field: 'loanpendingtime'},
  {header: 'Loan Additional Info', field: 'loanadditionalinfo'}
 ]
constructor(private fb: FormBuilder, private httpService: HttpdataService) {}
 ngOnInit(): void {
   this.createLoanTRackerForm();
   this.getLoans();
 }
 createLoanTRackerForm() {
  this.loanTrackerForm = this.fb.group({
    loanno: [''],
    loanbankname: [''],
    loanbookdate: [''],
    loanpurpose: [''],
    loanamount: [0],
    loantenure: [0],
    loanpendingtime: [''],
    loanadditionalinfo: [''],
    loanemi: ['']
  })
 }

 onSubmit() {
  console.log(this.loanTrackerForm?.value);
 
  this.httpService.postData(this.loanTrackerForm?.value, 'expenses/addloaninfo').subscribe(res => {
    console.log('DATA SUBMITGEED SUCCESSULY');
    
    this.loanTrackerList.push(this.loanTrackerForm?.value);
  })
 }

 onDocSelect(e: any) {
  console.log(e);
  
 }

 getLoans() {
  this.httpService.getMethod('expenses/getloaninfo').subscribe((loansdata: any) => {
  console.log('Loan Data ',loansdata);
  this.loanTrackerList = loansdata.loans;
  }, err => {
    console.log('Error ',err);
    
  })
 }

 getEmittedAction(actiondetails: any) {
  console.log('Emited Action ',actiondetails);
  if(actiondetails.actionname === 'delete') {
   this.httpService.postData({loanid: actiondetails.row._id}, 'expenses/deleteloaninfo').subscribe(deletedRes => {
    console.log('Deleted ',deletedRes);
    this.getLoans();
   }, err => {
    console.log('Deleted ERROR ',err);

   })
  }
 }

 exportToExcel() {
  const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.loanTrackerList);
  const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
  this.saveExcelFile(excelBuffer, 'rahul_loans');
 }

 private saveExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  const url: string = window.URL.createObjectURL(data);
  const a: HTMLAnchorElement = document.createElement('a');
  a.href = url;
  a.download = fileName + '.xlsx';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  window.URL.revokeObjectURL(url);
}

}
