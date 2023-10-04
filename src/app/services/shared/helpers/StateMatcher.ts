import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export class StateMatcher {

  passwordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

        if (!value) {
            return null;
        }

      let c = control.value.toString();
      const hasUpperCase = /[A-Z]+/.test(c);
      const hasLowerCase = /[a-z]+/.test(c);
      const hasNumeric = /[0-9]+/.test(c);
      const hasSpecial = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(c);
      const passwordValid = hasUpperCase && hasLowerCase && hasNumeric && hasSpecial;
      return !passwordValid ? { customValidator: true } : null;
    };
  }

}