import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSignIn, faEyeDropper, faEye, faEyeSlash, faUserPlus, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, NgControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  faSignIn = faSignIn;
  faEyeDropper = faEyeDropper;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  
  faUser = faUser;
  faUserCircle = faUserPlus;

  show: boolean = false;

  constructor(private userService: UserService,) {}

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  // accept only numeric character for age input
  numericOnly(event: any): boolean {
    let patt = /^([0-9])$/;
    let result = patt.test(event.key);
    return result;
  }

  onChangeShow(): void {
    this.show = !this.show;
  }
  //https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-observable-vs-angular-promise
  // https://thoughtbot.com/blog/transitions-and-transforms
  // https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/
  public submit(): void {

    // form validation should be added
    this.userService.create(this.registerForm).subscribe({
      next: (value: any) => {
        if (value.success) {
          this.registerForm.reset();
          alert("success! " + value.success);
        }
      },
      error(err) {
        alert(err);
      },
    })
  }
}
