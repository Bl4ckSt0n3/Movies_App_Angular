import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSignIn, faEyeDropper, faEye, faEyeSlash, faUserPlus, faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  registerForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    secondName: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
  });

  onChangeShow(): void {
    this.show = !this.show;
  }
  //https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-observable-vs-angular-promise
  // https://thoughtbot.com/blog/transitions-and-transforms
  // https://www.angularjswiki.com/angular/how-to-use-font-awesome-icons-in-angular-applications/
  public onSubmit(): void {
    
  }
}