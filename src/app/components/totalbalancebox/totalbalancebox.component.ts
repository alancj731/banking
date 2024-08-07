import { Component, Input } from '@angular/core';
import { CountUpModule } from 'ngx-countup';
import { DoughnutchartComponent } from '../doughnutchart/doughnutchart.component';

@Component({
  selector: 'app-totalbalancebox',
  standalone: true,
  imports: [CountUpModule, DoughnutchartComponent],
  templateUrl: './totalbalancebox.component.html',
  styleUrl: './totalbalancebox.component.css'
})
export class TotalbalanceboxComponent {
  @Input() accounts: any[] = [];
  @Input() totalBanks: number = 0;
  @Input() totalBalance: number = 0;
}
