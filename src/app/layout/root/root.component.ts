import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '@app/components/sidebar/sidebar.component';
import { MobnavbarComponent } from '@app/components/mobnavbar/mobnavbar.component';
import { getUser } from 'src/lib/user';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_ID } from 'src/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-root',
  standalone: true,
  imports: [RouterModule, SidebarComponent, MobnavbarComponent],
  templateUrl: './root.component.html',
  styleUrl: './root.component.css'
})
export class RootComponent implements OnInit {
  constructor(private cookieService: CookieService, private router: Router) { }

  async ngOnInit() {
    const token = this.cookieService.get(SESSION_ID);
    if (token) {
      this.loggedIn = await getUser(token);
    }
    if (!token || !this.loggedIn) {
      if (this.router.url !== '/signin' && this.router.url !== '/signup') {
        this.router.navigate(['/signin']);
      }
    }
  }
  loggedIn = null;
  
}
