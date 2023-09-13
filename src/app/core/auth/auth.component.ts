import { Component, TemplateRef, ViewChild, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { faSignIn } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {
  @ViewChild('template') templateref!: TemplateRef<any>;

  faSignIn = faSignIn;
  private modalService = inject(NgbModal);
  open() {
    this.modalService.open(this.templateref, { size: 'lg', backdrop: 'static' });
    
  }
  //https://www.infragistics.com/community/blogs/b/infragistics/posts/angular-observable-vs-angular-promise
  // https://thoughtbot.com/blog/transitions-and-transforms
  public onSubmit(): void {
    
  }
}
