import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signUpForm!: FormGroup;
  submitted = false;
  registerSuccess = false;

  constructor(private fb: FormBuilder, private router: Router,) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        firstName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
          ],
        ],
        lastName: [
          '',
          [
            Validators.required,
            Validators.minLength(2),
            Validators.maxLength(20),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required]],
        confirmPassword: ['', [Validators.required]],
      },
      {
        validator: MustMatch('password', 'confirmPassword'),
      }
    );
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.signUpForm.invalid) {
      return;
    }
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.signUpForm.value, null, 4));
    this.registerSuccess = true;
    this.router.navigate(['/login']);
  }

  onReset() {
    this.submitted = false;
    this.signUpForm.reset();
  }

  canExit() : boolean {
    if (confirm("Do you wish to go back? Please confirm")) {
        return true;
      } else {
        return false;
      }
    }
}

function MustMatch(password: string, confirmPassword: string): any {
  return (formGroup: FormGroup) => {
    const pwd = formGroup.controls[password];
    const matchingPwd = formGroup.controls[confirmPassword];

    if (matchingPwd.errors && !matchingPwd.errors['mustMatch']) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (pwd.value !== matchingPwd.value) {
      matchingPwd.setErrors({ mustMatch: true });
    } else {
      matchingPwd.setErrors(null);
    }
  };
}
