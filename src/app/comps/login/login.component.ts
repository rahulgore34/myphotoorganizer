import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpdataService } from 'src/app/shared/service/httpdata.service';
import {ConfirmPasswordValidator} from '../../shared/validations/passwordmatch';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationForm!: FormGroup;
  formBtnText = 'Register';
  headingFormName ='Create Your Space Here';
  alreadyLoginStatus = 'Already Login';
  showPassword: boolean = false;
  showConfirmPassword:boolean = false;
  changeType:string = 'password';
  ConfirmChangeType:string = 'password';
  constructor(private fb: FormBuilder, private httpService: HttpdataService, private router: Router) { }
  ngOnInit(): void {
    this.createAuthForm();
    // this.httpService.getMethod('photoownerusers').subscribe(res => {
    //   console.log('RESPONSE ', res);

    // })
  }

  createAuthForm() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', [Validators.required,Validators.pattern("^[a-zA-Z0-9]{8}$")]),
      password: new FormControl('', [Validators.required,Validators.maxLength(8),Validators.minLength(3)]),
      confirmpassword: new FormControl('', Validators.required)
    }, ConfirmPasswordValidator)

  }
submitted = false;
  onSubmit() {
    this.submitted = true;
    console.log(this.registrationForm.value);
    const req = {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
    }
    const reqUrl = this.formBtnText === 'Login' ? 'photoownerusers/signin' : 'photoownerusers/signup';
    this.httpService.postData(req, reqUrl).subscribe(
      {
        next: (v: any) => {
          if (v && v.status === 200) {
            console.log('RES ', v);
            this.router.navigate(['dashboard']);
          }

        },
        error: (e) => console.error('ERR ', e),
        complete: () => console.info('complete')
      }
    );

  }
  showConfirmControl = true;
  switchAuthForm(whichForm: string) {
    if(this.showConfirmControl==true){
      this.registrationForm.removeControl('confirmpassword');
      this.formBtnText = 'Login'
      this.headingFormName = 'Login here'
      this.alreadyLoginStatus ='Register your account'
    }else{
      this.registrationForm.addControl('confirmpassword', this.fb.control(''));
      this.formBtnText = 'Register'
      this.headingFormName = 'Create Your Space Here'
      this.alreadyLoginStatus ='Aleardy Login'
      
    }
    this.showConfirmControl = !this.showConfirmControl;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    this.changeType = this.showPassword? 'text':'password';
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.ConfirmChangeType = this.showConfirmPassword? 'text':'password';
  }



}
