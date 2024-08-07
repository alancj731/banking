import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { MobnavbarComponent } from '@app/components/mobnavbar/mobnavbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, SidebarComponent, MobnavbarComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent {
  loggedIn = {firstName: 'Jian', lastName: 'Chen'};
}
