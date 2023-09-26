import { Component, Input, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IconDefinition, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSignOut: IconDefinition = faSignOut;
  @Input() title: string = "";
  private router: Router = inject(Router);
  public redirect(urlParam: string): void {
    localStorage.removeItem('jwt');
    this.router.navigate([urlParam]);
  }
}
