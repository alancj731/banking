import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-headerbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './headerbox.component.html',
  styleUrl: './headerbox.component.css',
})
export class HeaderboxComponent {
  @Input() type: string = 'title';
  @Input() title: string = '';
  @Input() subText: string='';
  @Input() user: string='';
}
