import { Component } from '@angular/core';
import { AuthformComponent } from '../authform/authform.component';


@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [AuthformComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {

}
