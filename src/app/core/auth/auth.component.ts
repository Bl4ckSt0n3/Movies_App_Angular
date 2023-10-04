import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
// import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSignIn, faEye, faEyeSlash, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  // @ViewChild('template') templateref!: TemplateRef<any>;

  constructor(private authService: AuthService, private router: Router) { }
  faSignIn = faSignIn;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faUserCircle = faUserCircle;

  show: boolean = false;

  authForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required, 
      Validators.email
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(16)
    ])
  });

  onChangeShow(): void {
    this.show = !this.show;
  }

  // it is used for form input validation 
  public get _fControls() {
    return this.authForm.controls;
  }
  
  public submit(): void {
    if (this.authForm.valid) {
      this.authService.auth(this.authForm).subscribe({
        next: (value: any) => {
          // set jwt using localstorage however it will be stored in cookie instead localStorage
          if (value.success) {
            localStorage.setItem("jwt", value.data);
            this.authForm.reset();
            this.router.navigate(['pages/products']);
          } else {
            // add toast message here
            alert(value.message);
          }
          
        },
        error: (err) => {
          alert(err);
        },
      })
    }
  }


  //https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-observable-vs-angular-promise
  // https://thoughtbot.com/blog/transitions-and-transforms

  // private modalService = inject(NgbModal);
  // open() {
  //   this.modalService.open(this.templateref, { size: 'lg', backdrop: 'static' });
    
  // }
}
