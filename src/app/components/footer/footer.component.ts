import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { SESSION_ID } from 'src/constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  @Input() User: any = null;
  @Input() type: string = 'mobile';

  constructor(private cookieService: CookieService, private router: Router) { }

  handleLogout(){
    console.log('logout')
    this.cookieService.delete(SESSION_ID);
    this.router.navigate(['/signin']);
  }
}
