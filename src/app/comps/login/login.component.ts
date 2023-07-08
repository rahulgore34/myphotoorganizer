import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpdataService } from 'src/app/shared/service/httpdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  registrationForm!: FormGroup;
  formBtnText = 'Register';
  constructor(private fb: FormBuilder, private httpService: HttpdataService) { }
  ngOnInit(): void {
    this.createAuthForm();
    this.httpService.getMethod('photoownerusers').subscribe(res=> {
      console.log('RESPONSE ',res);
      
    })
  }

  createAuthForm() {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
    this.registrationForm.addControl('confirmpassword', new FormControl('confrm passwordf'));

  }

  onSubmit() {
    console.log(this.registrationForm.value);
    const req = {
      username: this.registrationForm.value.username,
      password: this.registrationForm.value.password,
    }
    const reqUrl = this.formBtnText === 'Login' ? 'photoownerusers/signin' : 'photoownerusers/signup';
    this.httpService.postData(req, reqUrl).subscribe(
      {
        next: (v) => {
          console.log('RES ',v);
          
        },
        error: (e) => console.error('ERR ',e),
        complete: () => console.info('complete') 
    }
    );

  }
  showConfirmControl = true;
  switchAuthForm(whichForm: string) {
    this.formBtnText = 'Login';
    this.registrationForm.removeControl('confirmpassword');
    this.showConfirmControl = false;
  }
}