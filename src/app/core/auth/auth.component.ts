import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSignIn, faEye, faEyeSlash, faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @ViewChild('template') templateref!: TemplateRef<any>;

  faSignIn = faSignIn;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faUserCircle = faUserCircle;

  show: boolean = false;
  private modalService = inject(NgbModal);
  open() {
    this.modalService.open(this.templateref, { size: 'lg', backdrop: 'static' });
    
  }

  onChangeShow(): void {
    this.show = !this.show;
  }
  //https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-observable-vs-angular-promise
  // https://thoughtbot.com/blog/transitions-and-transforms
  public onSubmit(): void {
    
  }
}
