import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  alreadyLoginStatus = 'Already Login'
  constructor(private fb: FormBuilder, private httpService: HttpdataService, private router: Router) { }
  ngOnInit(): void {
    this.createAuthForm();
    // this.httpService.getMethod('photoownerusers').subscribe(res => {
    //   console.log('RESPONSE ', res);

    // })
  }

  createAuthForm() {
    this.registrationForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
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
      this.formBtnText = 'Login'
      this.headingFormName = 'Login here'
      this.alreadyLoginStatus ='Register your account'
    }else{
      this.formBtnText = 'Register'
      this.headingFormName = 'Create Your Space Here'
      this.alreadyLoginStatus ='Aleardy Login'
    }
    this.registrationForm.removeControl('confirmpassword');
    this.showConfirmControl = !this.showConfirmControl;
  }



}
