import { Component, Input } from '@angular/core';
import { IconDefinition, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  faSignOut: IconDefinition = faSignOut;
  @Input() title: string = "";
}
