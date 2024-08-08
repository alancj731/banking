import { Component, Input } from '@angular/core';
import { formatAmount } from 'src/lib/utils';

@Component({
  selector: 'app-bankcard',
  standalone: true,
  imports: [],
  templateUrl: './bankcard.component.html',
  styleUrl: './bankcard.component.css'
})
export class BankcardComponent {
  @Input() account: any = null;
  @Input() userName: any = null;
  @Input() showBalance = false;
  formatAmount = formatAmount;
}
