import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankcardComponent } from '../bankcard/bankcard.component';

@Component({
  selector: 'app-rightsidebar',
  standalone: true,
  imports: [CommonModule, BankcardComponent],
  templateUrl: './rightsidebar.component.html',
  styleUrl: './rightsidebar.component.css',
})
export class RightsidebarComponent {
  @Input() user = { name: 'Chen', email:'jian@gmail.com' };
  @Input() transactions: any[] = [];
  @Input() banks: any[] = [];
}
