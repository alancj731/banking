import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mobnavbar',
  standalone: true,
  imports: [],
  templateUrl: './mobnavbar.component.html',
  styleUrl: './mobnavbar.component.css',
})
export class MobnavbarComponent {
  @Input() User = { firstName: 'John', lastName: 'Doe' };
}
