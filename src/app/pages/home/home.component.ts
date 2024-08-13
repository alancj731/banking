import { Component, OnInit } from '@angular/core';
import { HeaderboxComponent } from '@app/components/headerbox/headerbox.component';
import { TotalbalanceboxComponent } from 'src/app/components/totalbalancebox/totalbalancebox.component';
import { RightsidebarComponent } from 'src/app/components/rightsidebar/rightsidebar.component';
import { CookieService } from 'ngx-cookie-service';
import { getUser } from 'src/lib/user';
import { SESSION_ID } from 'src/constants';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderboxComponent,
    TotalbalanceboxComponent,
    RightsidebarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private cookieService: CookieService) {}

  async ngOnInit(): Promise<void> {
    this.loggedIn = await this.getLoggedInUser();
  }

  async getLoggedInUser() {
    const token = this.cookieService.get(SESSION_ID);
    if (!token || token === '') {
      return null;
    }
    return await getUser(token);
  }

  loggedIn: any = null;
}
