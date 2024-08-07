import { Component } from '@angular/core';
import { HeaderboxComponent } from '@app/components/headerbox/headerbox.component';
import { TotalbalanceboxComponent } from "../../components/totalbalancebox/totalbalancebox.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderboxComponent, TotalbalanceboxComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  loggedIn = { firstName: 'Jian' };
}
