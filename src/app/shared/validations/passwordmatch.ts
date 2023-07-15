import { AbstractControl, FormGroup, ValidatorFn } from '@angular/forms';



  export function ConfirmPasswordValidator(fg: AbstractControl){

    console.log('FGpassword ',fg.get('password')?.value);
    console.log('FGconfirm password ',fg.get('confirmpassword')?.value);

   let control = fg.get('password');
   let matchingControl = fg.get('confirmpassword');
   if (
     matchingControl?.errors &&
     !matchingControl?.errors['confirmPasswordValidator']
   ) {
     return null;
   }
   if (control?.value !== matchingControl?.value) {
     matchingControl?.setErrors({ confirmPasswordValidator: true });
   } else {
     matchingControl?.setErrors(null);
   }

   return null;
  }
