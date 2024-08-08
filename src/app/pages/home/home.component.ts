import { Component } from '@angular/core';
import { HeaderboxComponent } from '@app/components/headerbox/headerbox.component';
import { TotalbalanceboxComponent } from "src/app/components/totalbalancebox/totalbalancebox.component";
import { RightsidebarComponent } from "src/app/components/rightsidebar/rightsidebar.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderboxComponent, TotalbalanceboxComponent, RightsidebarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  loggedIn = { firstName: 'Jian', lastName:'Chen', email:'jian@gmail.com ' };
}
