import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-formitem',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formitem.component.html',
  styleUrl: './formitem.component.css'
})
export class FormitemComponent {
  @Input() formGroup: any = null;
  @Input() controlName: any = null;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() errors: any = {};
}
